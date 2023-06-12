import {Text,View,StyleSheet} from 'react-native' 
import Color from '../../constants/colors';
function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numbertext}>{children}</Text>

        </View>

    )
}
export default NumberContainer;

const styles=StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor: Color.accent500,
        padding:24,
        margin:24,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:8,
    },
    numbertext:{
        color:Color.accent500,
        fontWeight:'bold',
        fontSize:40,
        marginLeft:100,

    }
})