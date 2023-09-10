import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Explanation() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontWeight:'bold',marginBottom:50,marginTop:30}}>
            ゲームせつめい
        </Text>
        <Text>
        おや？めのまえにポケモンの
        シルエットがあらわれた！
        したの3ひきのポケモンのなか
        からどれがシルエットのポケモン
        なのかをあててみよう！
        </Text>
      </View>
    );
  }