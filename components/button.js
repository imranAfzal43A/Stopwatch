import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";
import { nightModecontext } from "../App";
const Mybutton = (props) => {
    const night = useContext(nightModecontext);
    return (
        <TouchableOpacity style={!night ? styles.button : styles.buttonN} onPress={props.onPress}>
            <Text style={!night ? styles.buttontxt : styles.buttontxtN}>{props.title}</Text>
        </TouchableOpacity>
    )
}
export default Mybutton;