import {Text,StyleSheet,View} from 'react-native';

function InstructionText({children, style}){
    return(
        
    <Text style={[style,styles.instructionText]}>{children}</Text>)
    

}
export default InstructionText;

const styles=StyleSheet.create({
    instructionText:{
        color:'black',
        fontSize:24,
    }
})