import { useContext } from 'react';
import { Appbar } from 'react-native-paper';
import { nightModecontext } from '../App';
import styles from './style';
const MyAppBar = () => {
  const night = useContext(nightModecontext);
  return (
    <Appbar.Header style={!night ? styles.appabr : styles.appabrN}>
      <Appbar.Content title="Stopwatch" />
    </Appbar.Header>
  )
};

export default MyAppBar;