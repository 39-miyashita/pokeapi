import * as React from 'react';
import { Button, View, Text, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explanation from './src/Layout/explanation.js';
import GamePlay from './src/Layout/gamePlay.js'
import Collection from './src/Layout/collection.js';

// export default async function poke() {
//   const url = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//   const data = await url.res.json();
//   console.log(data);
// }

function HomeScreen({ navigation }) {
  return (
    <View style={styles.silhouetteContainer}>
      <Text style={styles.silhouetteText}>ポケモンシルエットクイズ</Text>

      <View style={styles.playButton}>
      <View style={styles.playButtonRight}></View>
      <View style={styles.playButtonLeft}></View>
      <Pressable onPress={() => navigation.navigate('Explanation')}>
        <View style={styles.playContainer}>

          <Text style={styles.playText}>PLAY</Text>

        </View>
      </Pressable>
      </View>

      <Pressable onPress={() => navigation.navigate('Collection')}>
            <Text style={styles.collectionButton}>コレクションページへ</Text>
      </Pressable>
        <View style={styles.triangleTopRight}></View>
        <View style={styles.triangleTopLeft}></View>
        <View style={styles.triangleBottomLeft}></View>
        <View style={styles.triangleBottomRight}></View>

    </View>
  );
}

function ExplanationScreen({navigation}) {

  return(
    <View>
    <Pressable onPress={() => navigation.navigate('gamePlay')}>
            <Text style={styles.collectionButton}>gameスタート</Text>
      </Pressable>
    <Explanation/>
    </View>
  )

}

function GameScreen() {

  return(
    <View>
    <GamePlay/>
    </View>
  )

}

function CollectionScreen({navigation}) {
  return (
    <View style={{position:'relative', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Collection/>
      <Button
        title="タイトルへもどる"
        onPress={() => navigation.push('Home')}
      />
              <View style={styles.triangleTopRight}></View>
        <View style={styles.triangleTopLeft}></View>
        <View style={styles.triangleBottomLeft}></View>
        <View style={styles.triangleBottomRight}></View>
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
        <Stack.Screen name="Explanation" component={ExplanationScreen} options={{ title: 'ゲームせつめい' }}/>
        <Stack.Screen name="gamePlay" component={GameScreen} options={{ title: 'ゲームスタート' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//CSS

const styles = StyleSheet.create({
  silhouetteContainer:{
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    overflow:'hidden',
    backgroundColor:'white',
  },

  silhouetteText:{
    marginBottom:96,
    fontSize:30,
  },

  playButton:{
    position:'relative',
  },

  playButtonRight:{
    position:'absolute',
    width:1000,
    height:15,
    backgroundColor:'black',
    top:95,
    right:0,
  },

  playButtonLeft:{
    position:'absolute',
    width:1000,
    height:15,
    backgroundColor:'black',
    top:95,
    left:0,
  }, 

  collectionButton:{
    padding:5,
    fontSize:20,
    marginTop:100,
    backgroundColor:'#D9D9D9',
  },


  playContainer:{
    width:200,
    height:200,
    borderRadius: '100%',
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor:'#E6E6FA',
    justifyContent:'center',
  },

  playText:{
    fontSize:50,
    color:'green',
    textAlign:'center',
  },
  triangleTopRight:{
    position:'absolute',
    top:-80,
    right:-80,
    width:150,
    height:150,
    backgroundColor:'red',
    transform:[{rotate:'-45deg'}],
  },

  triangleTopLeft:{
    position:'absolute',
    top:-80,
    left:-80,
    width:150,
    height:150,
    backgroundColor:'red',
    transform:[{rotate:'-45deg'}],
  },

  triangleBottomRight:{
    position:'absolute',
    bottom:-80,
    right:-80,
    width:150,
    height:150,
    backgroundColor:'red',
    transform:[{rotate:'-45deg'}],
  },

  triangleBottomLeft:{
    position:'absolute',
    bottom:-80,
    left:-80,
    width:150,
    height:150,
    backgroundColor:'red',
    transform:[{rotate:'-45deg'}],
  },
 
})


export default App;