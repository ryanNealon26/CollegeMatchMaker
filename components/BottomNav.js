import { Text, Image,View, ImageBackground } from 'react-native'
import React from 'react'

function BottomNav(){
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
}

export default BottomNav;