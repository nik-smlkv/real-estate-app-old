import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Calculator from '../../screens/Calculator/Calculator';
import Chat from '../../screens/Chat/Chat';
import Credits from '../../screens/Credits/Credits';
import Installment from '../../screens/Installment/Installment';
import Quarters from '../../screens/Quarters/Quarters';
import Services from '../../screens/Services/Services';
import News from '../../screens/News/News';
const Navigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Credits" component={Credits} />
        <Stack.Screen name="Installment" component={Installment} />
        <Stack.Screen name="Quarters" component={Quarters} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator