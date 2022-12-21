import { StatusBar } from 'expo-status-bar';
import { createContext, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import styles from './components/style';
import Mybutton from './components/button';
import MyAppBar from './components/appbar';
export const nightModecontext = createContext()
export default function App() {
  const [start, setStart] = useState(false)
  const [reset, setReset] = useState(false)
  const [cm, setCM] = useState(false)
  const [nightMode, setNightmode] = useState(false);
  return (
    <nightModecontext.Provider value={nightMode} >
      <MyAppBar />
      <SafeAreaView style={!nightMode ? styles.container : styles.containerN}>
        <Stopwatch msecs={cm} start={start} reset={reset} options={!nightMode ? styles.clock : styles.clockN} />
        <Mybutton title='Start' onPress={() => { setStart(true); setReset(false) }} />
        <Mybutton title='Stop' onPress={() => { setStart(false) }} />
        <Mybutton title='Reset' onPress={() => { setStart(false); setReset(true) }} />
        <Mybutton title='Mili sec' onPress={() => setCM(!cm)} />
        <Mybutton title='Night Mode' onPress={() => { setNightmode(!nightMode) }} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </nightModecontext.Provider>
  );
}

