import {StyleSheet,View} from 'react-native';
import Color from '../../constants/colors';

function Card( {children}){
    return  <View style={styles.card}>{children}</View>

}
export default Card;

const styles=StyleSheet.create({


card:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FF9FD3',
    marginHorizontal:24,
    marginTop:100,
    borderRadius:8,
    padding:16,
    elevation:4,
    shadowColor: 'black',
    shadowRadius:6,
    ShadowOffset:{width:0,height:2},
    shadowOpacity:0.25,

},

})