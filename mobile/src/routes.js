import React from 'react';
// import { TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import DetailsDelivery from './pages/Dashboard/DetailsDelivery';
import NewProblemDelivery from './pages/Dashboard/NewProblemDelivery';
import ProblemsDelivery from './pages/Dashboard/ProblemsDelivery';
import ConfirmDelivery from './pages/Dashboard/ConfirmDelivery';
import Profile from './pages/Profile';

Icon.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// TODO: Checar todas as rotas
function NewStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="menu" size={24} color={color} />
          ),
        }}
      />

      <Stack.Screen
        name="DetailsDelivery"
        component={DetailsDelivery}
        options={{
          headerTitle: 'Detalhes da encomenda',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            left: 10,
          },
        }}
      />

      <Stack.Screen
        name="NewProblemDelivery"
        component={NewProblemDelivery}
        options={{
          headerTitle: 'Detalhes do problema',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            left: 10,
          },
        }}
      />

      <Stack.Screen
        name="ProblemsDelivery"
        component={ProblemsDelivery}
        options={{
          headerTitle: 'Visualizar problemas',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            left: 10,
          },
        }}
      />

      <Stack.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{
          headerTitle: 'Confirmar entrega',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: '#fff',
          headerLeftContainerStyle: {
            left: 10,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999',
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 14,
          marginBottom: 5,
        },
        style: {
          height: 50,
          backgroundColor: '#ffff',
        },
      }}
      headerMode="none"
    >
      {/* <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="menu" size={24} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Dashboard"
        component={NewStack}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="reorder" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
