import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import MainNavigator from '../main'
import OrderNavigator from '../orders'
import CartNavigator from '../cart'
const BottonTab = createBottomTabNavigator()
 const TabsContainer = () => {
  return (
   <BottonTab.Navigator>
    <BottonTab.Screen component={MainNavigator} name='MainPage'/>
    <BottonTab.Screen name='OrdersPage' component={OrderNavigator}/>
    <BottonTab.Screen name='CartPage' component={CartNavigator}/>
   </BottonTab.Navigator>
  )
}
export default TabsContainer