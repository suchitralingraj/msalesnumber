import {Text,View,StyleSheet,Alert,FlatList} from 'react-native';
import {useState,useEffect} from 'react';


import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Cards';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  let minBoundary=1;
  let maxBoundary=100;
  

function GameScreen({userNumber,onGameOver}){
    const intilGuess =generateRandomBetween(1,100 , userNumber);
    const[currentGuess,setCurrentNumber]=useState(intilGuess);
    const [guessRounds,setGuessRounds]=useState([intilGuess]);

    useEffect(()=>{
        if(currentGuess === userNumber){
            onGameOver(guessRounds.length);
        }
    },[currentGuess,userNumber,onGameOver]);

    useEffect(()=>{
        minBoundary=1;
        maxBoundary=100;
    },[]);

    function nextGuessHandler(direction){
        //direction=> "lower", 'greater'

        if(
        ( direction==='lower' && currentGuess < userNumber) ||
        ( direction==='greater' && currentGuess > userNumber)
        ){
            Alert.alert("Don't Lie!", 'you know that this is wrong...',[
                {text:'sorry!',style:'cancel'},
            ]);
            return;

        }


        if(direction ==='lower'){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess +1;
        }
        
        const newRndNumber= generateRandomBetween( minBoundary,maxBoundary,currentGuess);
        setCurrentNumber(newRndNumber);
        setGuessRounds(prevGuessRounds=> [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundListLength =guessRounds.length;

    return(
    <View  style={styles.screen}>
        <Title>Opponent's  Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>

        <Card>
            <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
            <View  style={styles.buttonscontainer}>
                <View style={styles.buttoncontainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                -
            </PrimaryButton>
            </View>
            <View style={styles.buttoncontainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                +
            </PrimaryButton>
            </View>
            </View>
        </Card>
        <View style={styles.listContainer}>
            {/* {guessRounds.map(guessRound=> <Text key={guessRound}>{guessRound}</Text>)} */}
            <FlatList
             data={guessRounds}
              renderItem={(itemData)=> <GuessLogItem roundNumber={guessRoundListLength - itemData.index}
               guess={itemData.item}/>}
              keyExtractor={(item) =>item}
              />
        </View>
    </View>

)};
export default GameScreen;

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:20,  
        
    },
    button:{
        
        flexDirection:'row'
    },
    buttonscontainer:{
        flexDirection:'row',
        
    },
    buttoncontainer:{
        flex:1,
    },
    instructionText:{
        marginBottom:12,
    },

    listContainer:{
        flex:1,
        padding :16,
    }

    
})