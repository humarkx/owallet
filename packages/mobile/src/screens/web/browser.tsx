import React, { FunctionComponent, useEffect, useState } from "react";
// import { PageWithScrollViewInBottomTabView } from "../../components/page";

import { StyleSheet, View } from "react-native";
import { useStyle } from "../../styles";
import { TextInput } from "../../components/input";
import { Button } from "../../components/button";
import { useSmartNavigation } from "../../navigation";
import isValidDomain from "is-valid-domain";
// import { PageWithScrollView } from "../../components/page";
import { useNavigation } from "@react-navigation/core";

export const Browser: FunctionComponent = () => {
  const style = useStyle();
  const smartNavigation = useSmartNavigation();

  const navigation = useNavigation();

  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({ tabBarStyle: { display: "none" }, tabBarVisible: false });
    return () =>
      navigation
        .getParent()
        ?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
  }, [navigation]);

  const [url, setUrl] = useState("");

  const onHandleUrl = () => {
    if (isValidDomain(url?.toLowerCase())) {
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
    <View
      // contentContainerStyle={[style.get("flex-grow-1")]}
      style={StyleSheet.flatten([
        style.flatten(["padding-x-20", "flex-grow-1"]),
      ])}
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
    </View>
  );
};
