import * as React from 'react';
import { Button, View, Text,Image,StyleSheet,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState,useEffect } from 'react';

  export default function Collection() {
    const [poke,setPoke] = useState([]);
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(1);
    const [count2,setCount2] = useState(2);
    const [count3,setCount3] = useState(3);
    const [count4,setCount4] = useState(4);
    const [count5,setCount5] = useState(5);
    const [count6,setCount6] = useState(6);
    const [count7,setCount7] = useState(7);
    const [count8,setCount8] = useState(8);
    useEffect(() => {
      const pokeData = async () => {
        for (let i = 1; i <= 151; i++) {
          const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${[i]}`);
        const a = await url.json();

        //ポケモンのデータ追加
          setPoke((prevpoke) => {
            return[...prevpoke,a.sprites.front_default];
          });
          
        }
        }
      pokeData();
    },[])
    return(
       <View>
      <Pressable style={{width:70,height:70,borderColor:'aqua',backgroundColor:'aqua',alignItems:'center',justifyContent:'center'}} onPress={()=>{
         setCount(count+9);
         setCount1(count1+9);
         setCount2(count2+9);
         setCount3(count3+9);
         setCount4(count4+9);
         setCount5(count5+9);
         setCount6(count6+9);
         setCount7(count7+9);
         setCount8(count8+9);
         }}><Text>次へ</Text></Pressable> 
         <View style={styles.pokegrid}>
         <Image source={{uri:poke[count]}}
         style={styles.pokeImgStyle}/>
        <Image source={{uri:poke[count1]}}
         style={styles.pokeImgStyle}/>
         <Image source={{uri:poke[count2]}}
         style={styles.pokeImgStyle}/>
        <Image source={{uri:poke[count3]}}
         style={styles.pokeImgStyle}/>
         <Image source={{uri:poke[count4]}}
         style={styles.pokeImgStyle}/>
        <Image source={{uri:poke[count5]}}
         style={styles.pokeImgStyle}/>
         <Image source={{uri:poke[count6]}}
         style={styles.pokeImgStyle}/>
        <Image source={{uri:poke[count7]}}
         style={styles.pokeImgStyle}/>
         <Image source={{uri:poke[count8]}}
         style={styles.pokeImgStyle}/>
         </View>
         
         </View>
         
         /*<Pressable style={{width:100,height:100,marginRight:'2vw',}} onPress={()=>{
                        {setCount(count+9)}
}}><Text>次へ</Text></Pressable>

<View style={styles.pokegrid}>
       {poke.map((pi,index) => {
           return(
            <React.Fragment key={index}>
              <Image source={{uri:pi[count]}}
              style={styles.pokeImgStyle}
              />
              {console.log(count)}
            </React.Fragment>
            )
          })} 
      </View> */
          

          
       
        )

    }

    const styles = StyleSheet.create({
      pokeImgStyle : {
        width:100,
        height:100,
        backgroundColor:'gray',
        marginRight:15,
        marginTop:15,
        borderRadius:100,
      },

      pokegrid:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
      }
    })

