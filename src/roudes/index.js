import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import { Component } from 'react';
import SignIn from '../pages/Signin';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
       <Stack.Navigator>
        <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headersShown: false }}
        />

        <Stack.Screen
        name="Signin"
        component={SignIn}
        options={{ headersShown: false }}
        />
       </Stack.Navigator>
    )
}