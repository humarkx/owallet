import React, { FunctionComponent } from 'react'
import { Text, View } from 'react-native'
import { InfoCircleIcon } from '../../components/icon'
import { AmountInput, TextInput } from '../../components/input'
import { colors, spacing } from '../../themes'

const UpdateGasModal: FunctionComponent = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: colors['gray-900']
        }}
      >
        Edit gas fee
      </Text>
      <TextInput
        label="Gas limit"
        iconLabel={<InfoCircleIcon />}
        containerStyle={{ width: '100%' }}
      />
      <TextInput
        label="Gas price"
        iconLabel={<InfoCircleIcon />}
        containerStyle={{ width: '100%' }}
      />
      <View style={{ marginTop: spacing['20'] }}>
        <Text>Total gas fee</Text>
        <View>
          <Text>0.2 ORAI</Text>
          <Text>≈ $0.00008</Text>
        </View>
      </View>
    </View>
  )
}

export default UpdateGasModal
