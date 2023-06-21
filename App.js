import React from 'react'
import codePush from "react-native-code-push"; 
import {useState, useEffect} from   'react';

import {StyleSheet,ImageBackground,SafeAreaView} from 'react-native'
import  LinearGradient  from 'react-native-linear-gradient'
import StartGamescreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';
import Color from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: { appendReleaseDescription: true }

  };
const App = () => {

 
  const [ userNumber, setUserNumber]=useState();
  const[gameIsOver,setgameIsOver]=useState(true);
  const[guessRounds,setGuessRounds]=useState(0);
  
  useEffect(() => {

    codePush.sync({
  
      updateDialog: true,
  
      installMode: codePush.InstallMode.IMMEDIATE
  
    });
  
  }, []);

 


  function pickedNumberHandler(pickedNumbr){
    setUserNumber(pickedNumbr);
    setgameIsOver(false);
  }
  function gameOverhandler( numnerOfRounds){
    setgameIsOver(true);
    setGuessRounds(numnerOfRounds);
  }
  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);

  }


  let screen =<StartGamescreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen =<GameScreen  userNumber={userNumber} onGameOver={gameOverhandler}/>
  }

  if(gameIsOver && userNumber){
    screen=<GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>

  }
  

  return (
    <LinearGradient  colors= {[Color.primary700,Color.primary800]} style={styles.rootapp}>
      <ImageBackground  
      source={require('../assets/images/background.png')} 
      resizeMode='cover'
      style={styles.rootapp}
      imageStyle={styles.backgroundimage}
      >
        <SafeAreaView style={styles.rootapp}>{screen}</SafeAreaView>
       </ImageBackground>

    </LinearGradient>
    
  )
}

export default codePush(codePushOptions)(App); 

const styles=StyleSheet.create({
 rootapp:{
   flex:1,
 } ,

 backgroundimage:{
   opacity:0.9,
 }
})
