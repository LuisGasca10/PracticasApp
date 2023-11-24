import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import Screen5 from '../screens/Screen5';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator

            screenOptions={{
                headerTitle: '',
                headerShown: false,
                headerRight: () => (
                    <View style={{ marginRight: 20 }}>
                        <Ionicons name='search' size={25} color="black" />
                    </View>
                ),
                headerLeft: () => (
                    <View style={{ marginLeft: 20 }}>
                        <Ionicons name='menu' size={32} color="black" />
                    </View>
                ),
                tabBarStyle: {
                    elevation: 0,
                    borderColor: 'white'
                }
            }}
        >
            <Tab.Screen name={'HomeTab'} component={Screen1}
                options={{
                    tabBarIcon: (({ color, size }) => <Ionicons color={color} size={size} name='home-outline' />),
                    tabBarLabel: 'Home'

                }}
            />
            <Tab.Screen name={'Sleep'} component={Screen2}
                options={{

                    headerShown: true,
                    headerStyle: {
                        elevation: 0,
                        backgroundColor: '#F9BC7B',
                        borderColor: '#F9BC7B'
                    },
                    tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name='moon-outline' />
                }}
            />
            <Tab.Screen name={'Move'} component={Screen3}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name='trash-bin-outline' />
                }}
            />
            <Tab.Screen name={'Explore'} component={Screen4}
                options={{

                    tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name='search-outline' />
                }}
            />
            <Tab.Screen name={'Profile'} component={Screen5}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name='person-outline' />
                }}
            />
        </Tab.Navigator>)
}

