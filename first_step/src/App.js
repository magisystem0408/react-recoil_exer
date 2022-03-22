import './App.css';
import {RecoilRoot} from "recoil";
import {View} from "./components/View";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <View/>
          <div>ここからinput</div>
          <Input />
      </RecoilRoot>

    </div>
  );
}

export default App;
