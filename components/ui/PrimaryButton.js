import {View ,Text,Pressable,StyleSheet} from 'react-native'
import Color from '../../constants/colors';
function PrimaryButton({children,onPress}){
    
    return(
        <View style={styles.buttonoutercontainer}>
        <Pressable 
        style={styles.buttoninnercontainer}
        onPress={onPress} 
        android_ripple={{color: Color.primary600}}
        
        >
       
        <Text style={styles.buttontext}>{children}</Text>
       
        </Pressable>
        </View>
    )
}
const styles=StyleSheet.create({
    buttonoutercontainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden',

    },
    buttoninnercontainer:{
        backgroundColor:Color.primary500,
        borderRadius:28,
        paddingVertical:8,
        paddingHorizontal:16,
        margin:4,
        elevation:2,
        
    },
    buttontext:{
        textAlign:'center',
        color:'white',
        
    }
})


export default PrimaryButton;