import {View,StyleSheet,Image,Text} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Color from '../constants/colors';
function GameOverScreen({roundsNumber,userNumber,onStartNewGame}){
return (
<View>

<Image 
style={styles.image}
source={require('../assets/images/Game-Over.webp')} />


<Text style={styles.summeryText}>
    Your phone need  < Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
</Text>
<PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
</View>

)
}
export default GameOverScreen;

const styles=StyleSheet.create({
    image:{
        
        width:200,
        height:200,
        borderRadius:200,
        borderWidth:3,
        overflow:'hidden',
        borderColor:Color.primary800,
        margin:100

    },
    highlight:{
        color:'black',
        fontSize:20,
        

        
    },
    summeryText:{
        textAlign:'center',
        fontWeight:'bold'

    }

})