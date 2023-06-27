import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color : 'red',
      position: 'relative',
      width: 200,
      height: 200,
    }}>ポケモンシルエットクイズ</Text>

      <Button
        title="コレクションページ"
        onPress={() => navigation.navigate('Collection')}
      />
    </View>
  );
}

function CollectionScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text></Text>
      <Button
        title="タイトルへ戻る"
        onPress={() => navigation.push('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ポケモンシルエットクイズ' }}/>
        <Stack.Screen name="Collection" component={CollectionScreen} options={{ title: 'コレクション' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

//      <Button
// title="PLAY"
// onPress={() => navigation.navigate('Details')}
// />