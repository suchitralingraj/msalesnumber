import {View,Text,StyleSheet} from 'react-native';
import Color from '../../constants/colors';
function GuessLogItem({roundNumber,guess}){
    return <View style={styles.listItem}>
        <Text >#{roundNumber}</Text>
        <Text >Opponent's Guess: {guess}</Text>

    </View>

}
export default GuessLogItem;

const styles=StyleSheet.create({
    listItem:{
        borderColor:Color.primary800,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:'#FF9FD3',
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        elevation:4,
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3


    }
})
    