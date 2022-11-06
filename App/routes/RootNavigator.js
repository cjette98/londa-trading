import { createStackNavigator } from '@react-navigation/stack'

import TradingHome from '../screens/trading-home'
import TradingDetails from '../screens/trading-details'
import routeList from './list'

const Stack = createStackNavigator()

export default function () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routeList.HOME} component={TradingHome} />
      <Stack.Screen name={routeList.TRADING_DETAILS} component={TradingDetails} />

    </Stack.Navigator>
  )
}
