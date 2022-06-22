#!/bin/bash

# react-native-ble-plx requires only one instance of BLEManager exists.
# But, react-native-hw-transport-ble uses their instance without exporting that.
# So, to use the react-native-hw-transport-ble's ble manager instance,
# temporarily change the their source code by force.

DIR="$( cd "$( dirname "$0" )" && pwd -P )"

cp /c/Users/84327/Desktop/owallet/packages/mobile/scripts/BleTransport.d.ts /c/Users/84327/Desktop/owallet/packages/mobile/node_modules/@ledgerhq/react-native-hw-transport-ble/lib/BleTransport.d.ts
cp /c/Users/84327/Desktop/owallet/packages/mobile/scripts/BleTransport.js /c/Users/84327/Desktop/owallet/packages/mobile/node_modules/@ledgerhq/react-native-hw-transport-ble/lib/BleTransport.js
