import * as React from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explanation from './src/Components/Layout/explanation.js';

function HomeScreen({ navigation }) {
  return (
    <View style={{position:'relative', flex: 1, alignItems: 'center', justifyContent: 'center',overflow:'hidden'}}>
      <Text style={{marginBottom:96,fontSize:30}}>ポケモンシルエットクイズ</Text>

      <Pressable onPress={() => navigation.navigate('Explanation')}>
        <View style={{
            width:200,
            height:200,
            borderRadius: 1000,
            borderWidth: 5,
            borderColor: 'black',
            backgroundColor:'#E6E6FA',
            justifyContent:'center'}}>

          <Text style={{
            fontSize:50,
            color:'green',
            textAlign:'center',
            }}>PLAY</Text>

        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Collection')}>
            <Text style={{fontSize:20,marginTop:100}}>コレクションページへ</Text>
      </Pressable>
      <View style={{position:'absolute',top:-80,right:-80,width:150,height:150,backgroundColor:'red',transform:[{rotate:'-45deg'}]}}></View>
      <View style={{position:'absolute',top:-80,left:-80,width:150,height:150,backgroundColor:'red',transform:[{rotate:'-45deg'}]}}></View>
      <View style={{position:'absolute',bottom:-80,right:-80,width:150,height:150,backgroundColor:'red',transform:[{rotate:'-45deg'}]}}></View>
      <View style={{position:'absolute',bottom:-80,left:-80,width:150,height:150,backgroundColor:'red',transform:[{rotate:'-45deg'}]}}></View>
    </View>
  );
}

function CollectionScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text></Text>
      <Button
        title="タイトルへもどる"
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
        <Stack.Screen name="Explanation" component={Explanation} options={{ title: 'ゲームせつめい' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;