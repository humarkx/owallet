import React, { FunctionComponent, useState } from "react";
import { PageWithScrollViewInBottomTabView } from "../../components/page";
import { StyleSheet } from "react-native";
import { useStyle } from "../../styles";
import { TextInput } from "../../components/input";
import { Button } from "../../components/button";
import { useSmartNavigation } from "../../navigation";

export const Browser: FunctionComponent = () => {
  const style = useStyle();
  const smartNavigation = useSmartNavigation();

  const [url, setUrl] = useState("");

  const onHandleUrl = () => {
    if (url?.toLowerCase().indexOf("http") === 0) {
      smartNavigation.pushSmart("Web.dApp", {
        name: "Browser",
        uri: url,
      });
      return;
    } else {
      smartNavigation.pushSmart("Web.dApp", {
        name: "Google",
        uri: `https://www.google.com/search?q=${url ?? ""}`,
      });
    }
  };

  return (
    <PageWithScrollViewInBottomTabView
      contentContainerStyle={[style.get("flex-grow-1")]}
      style={StyleSheet.flatten([style.flatten(["padding-x-20"])])}
    >
      <TextInput
        containerStyle={style.flatten(["padding-bottom-6", "margin-top-64"])}
        returnKeyType={"next"}
        onSubmitEditing={onHandleUrl}
        onChangeText={(txt) => setUrl(txt.toLowerCase())}
      />
      <Button
        size="small"
        text="Go"
        mode="fill"
        containerStyle={style.flatten(["min-width-72", "self-center"])}
        onPress={onHandleUrl}
      />
    </PageWithScrollViewInBottomTabView>
  );
};
