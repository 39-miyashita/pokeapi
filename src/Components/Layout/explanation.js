import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Explanation() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <h1>
            ゲームせつめい
        </h1>
        <p>
        おや？めのまえにポケモンの
        シルエットがあらわれた！
        したの3ひきのポケモンのなか
        からどれがシルエットのポケモン
        なのかをあててみよう！
        </p>
      </View>
    );
  }