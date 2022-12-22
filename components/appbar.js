import { useContext } from 'react';
import { Appbar } from 'react-native-paper';
import { NightModecontext } from "../App";
import styles from './style';
const MyAppBar = (props) => {
  const night = useContext(NightModecontext);
  return (
    <Appbar.Header style={!night ? styles.appabr : styles.appabrN}>
      <Appbar.Content title="Stopwatch" />
      <Appbar.Action icon={!night ? require('../assets/sun.png') : require('../assets/moon.png')} onPress={props.onPress} />
    </Appbar.Header>
  )
};
export default MyAppBar;