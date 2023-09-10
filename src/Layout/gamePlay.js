import * as React from 'react';
import { Button, View, Text,Image,StyleSheet,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState,useEffect } from 'react';

  export default function Collection() {

    const [name,setName] = useState([]);
    const [name1,setName1] = useState("bulbasaur");
    const [correct,setCorrect] = useState("");
    const [incorrect,setIncorrect] = useState("");
    const [count,setCount] = useState(0);

    const [poke1,setPoke1] = useState([]);
    const [poke2,setPoke2] = useState([]);
    const [poke3,setPoke3] = useState([]);
    const [poke4,setPoke4] = useState([]);

    const [count1,setCount1] = useState(1);
    const [count3,setCount3] = useState(5);
    const [count4,setCount4] = useState(7);

    let random1 = Math.floor( Math.random() * 152 );
    let random3 = Math.floor( Math.random() * 152 );
    let random4 = Math.floor( Math.random() * 152 );
    useEffect(() => {
      const pokeData = async () => {
        for (let i = 1; i <= 151; i++) {
          const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${[i]}`);
        const a = await url.json();
        
        //ポケモンのデータ追加
          setPoke1((prevpoke1) => {
            return[...prevpoke1,a.sprites.front_default];
          });

          setPoke2((prevpoke2) => {
            return[...prevpoke2,a.sprites.front_default];
          });

          setPoke3((prevpoke3) => {
            return[...prevpoke3,a.sprites.front_default];
          });

          setPoke4((prevpoke4) => {
            return[...prevpoke4,a.sprites.front_default];
          });

          setName((prevpoke5) => {
            return[...prevpoke5,a.name];
          });
          
        }
        }
      pokeData();
    },[])
    return(
      <>
  <View  style={{margin:'auto'}}>
        <Pressable style={{width:100,height:100,borderColor:'aqua',backgroundColor:'aqua',alignItems:'center',justifyContent:'center'}} onPress={()=>{

            setCount1(random1);
            console.log(count1);

            setCount3(random3);
            console.log(count3);

            setCount4(random4);
            console.log(count4);

            setCorrect("");
          setIncorrect("");

            }}>
            <Text>次へ</Text>
            </Pressable> 
            </View>
              
            <View style={{alignItems:'center'}}>
                 <Image source={{uri:poke1[count1]}}
                style={styles.pokeImgStyle1}/>

                <View style={styles.pokeflex}>

                  {/* 正解 */}

                  <Pressable style={{width:100,height:100,marginRight:15,}} onPress={()=>{
                    setCount(count+1);
                   setName1(name[count1]);
                   setCorrect(`正解!　${name1}　を捕まえた!`)
                  }}><Image source={{uri:poke2[count1]}}
                  style={styles.pokeImgStyle}/></Pressable>
              
              {/* 不正解 */}

              <Pressable style={{width:100,height:100,marginRight:15,}} onPress={()=>{
                    setIncorrect(`不正解`);
            }}><Image source={{uri:poke3[count3]}}
            style={styles.pokeImgStyle}/></Pressable>
                
                <Pressable style={{width:100,height:100,marginRight:15,}} onPress={()=>{
                    setIncorrect(`不正解`);
            }}><Image source={{uri:poke4[count4]}}
            style={styles.pokeImgStyle}/></Pressable>

                </View>
            </View>

            <Text style={{textAlign:'center',marginTop:80}}>{correct}</Text>
            <Text style={{textAlign:'center',marginTop:15}}>{incorrect}</Text>
            <Text style={{textAlign:'center',marginTop:50}}>{`正解した数${count}`}</Text>


    {/* //   <View>
    //    <View style={styles.pokegrid}>
    //    {poke.map((pi,index) => {
    //        return(
    //         <Image key={index} source={{uri:pi}}
    //         style={styles.pokeImgStyle}/>
    //         )
    //       })} 
    //   </View>
    //   </View> */}
    </>
          )
      

    }

    const styles = StyleSheet.create({
      pokeImgStyle1 : {
        width:150,
        height:150,
        marginRight:15,
        marginTop:15,
        filter: `contrast(0%)`,
      },
      pokeImgStyle : {
        width:100,
        height:100,
        backgroundColor:'gray',
        marginRight:15,
        marginTop:15,
        borderRadius:100,
      },

      pokeflex : {
        flexDirection:'row',
      }

    //   pokegrid:{
    //     flexDirection:'row',
    //     flexWrap:'wrap',
    //     justifyContent:'center'
    //   }
    })

