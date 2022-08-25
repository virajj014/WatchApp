import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Screen1 from './View/Screen1';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2 from './View/Screen2';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='s1'>
        <Stack.Screen name="s1" component={Screen1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="s2" component={Screen2}
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>

    // <SafeAreaView style={styles.container}>
    // <Screen1 />
    // </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
