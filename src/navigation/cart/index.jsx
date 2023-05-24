import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import { Cart } from '../../screens'
const Stack = createNativeStackNavigator()
 const CartNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Cart'>
            <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default CartNavigator