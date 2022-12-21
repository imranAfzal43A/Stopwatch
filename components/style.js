import { Dimensions, StyleSheet } from "react-native";
const sc = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex:50,
        justifyContent: "center",
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },
    containerN: {
        flex:50,
        justifyContent: "center",
        alignContent:"center",
        alignItems:"center",
        backgroundColor:'#453C67'
    },
    button: {
        backgroundColor: '#6D67E4',
        width: sc.width/2,
        height:sc.height/18,
        borderRadius:sc.width/2 ,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        margin:6,
        justifyContent:"center",
        
    },
    buttonN: {
        backgroundColor: '#F2F7A1',
        width: sc.width/2,
        height:sc.height/18,
        borderRadius:sc.width/2 ,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        margin:6,
        justifyContent:"center",
        color:'white',
        textDecorationColor:'black'
    },
    appabr:{backgroundColor:'white'},
    appabrN:{backgroundColor:'#453C67'},
    buttontxt: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: "center",
    },
    buttontxtN: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: "center",
        color:'black'
    },
    clock:{
        container: {
            borderRadius:10,
            width:sc.width/1.5,
            borderColor: '#46C2CB',
            borderWidth: 1,
            padding: 5,
            marginVertical:6,
          },
          text: {
            fontSize: 30,
            alignSelf:'center'
          }
    },
    clockN:{
        container: {
            borderRadius:10,
            width:sc.width/1.5,
            borderColor: 'white',
            borderWidth: 1,
            padding: 5,
            marginVertical:6,
            backgroundColor:'white'
          },
          text: {
            fontSize: 30,
            alignSelf:'center'
          }
    }
})
export default styles;