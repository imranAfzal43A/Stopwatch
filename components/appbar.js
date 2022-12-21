import { useContext,useState } from 'react';
import { Appbar } from 'react-native-paper';
import { NightModecontext } from '../App';
import { Image } from 'react-native';
import styles from './style';
const MyAppBar = () => {
  const night = useContext(NightModecontext);
  const [nightMode, setNightmode] = useState(false);
  return (
    <Appbar.Header style={!night ? styles.appabr : styles.appabrN}>
      <Appbar.Content title="Stopwatch" />
      <Appbar.Action icon={!night ? require('../assets/sun.png') : require('../assets/moon.png')} onPress={() => { setNightmode(!nightMode) }} />
    </Appbar.Header>
  )
};

export default MyAppBar;