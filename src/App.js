import React from 'react'
import Loader from "./components/screens/Loader";
import MyClassEmotion from './components/Atoms/Charts/MyClassEmotion'
import ScreenTime from './components/Atoms/Charts/ScreenTime'

const App = () => {
  return (
    <div>
      <MyClassEmotion />
      <ScreenTime />
    </div>
  );
}

export default App;
