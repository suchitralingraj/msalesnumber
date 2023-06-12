import {View ,TextInput,StyleSheet,Alert,Text} from 'react-native';
import {useState} from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Color from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Cards';
import InstructionText from '../components/ui/InstructionText';



function StartGamescreen({onPickNumber}){
    const[enteredNumber,setEnteredNumber]=useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chosenNumber =parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber >99    ){
            // to show alert
            Alert.alert(
                'Invalid number',
                'Nuber has to be between 1 and 99.',
                [{ text:'okay', style:'destructive',onPress: resetInputHandler}]


                );
            return;
                }
                onPickNumber(chosenNumber);
    }



    return(
    <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
    <Card>
        <InstructionText >
            Enter a Number
        </InstructionText>
        <TextInput 
         style={styles.numberinput} 
         maxLength={2}
         keyboardType='number-pad'
         autoCapitalize='none'
         autoCorrect={false}
         onChangeText={numberInputHandler}
         value={enteredNumber}
         />
         <View style={styles.buttonscontainer}>
             <View style={styles.buttoncontainer}>
             <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
             </View>
             <View style={styles.buttoncontainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
         </View>
    </Card>
    </View>
)}


const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:'center',


    },
    

    
    numberinput:{

        height:60,
        width:50,
        fontSize:32,
        borderBottomColor:'black',
        borderBottomWidth:2,
        color:'black',
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center',
       
    },
    buttonscontainer:{
        flexDirection:'row'
    },
    buttoncontainer:{
        flex:1,
    }

})

export default StartGamescreen;