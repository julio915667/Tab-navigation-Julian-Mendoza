import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import { Cart, Orders } from '../../screens'
const Stack = createNativeStackNavigator()
 const OrderNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Orders'>
            <Stack.Screen name="Orders" component={Orders}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default OrderNavigator