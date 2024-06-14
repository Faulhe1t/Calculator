import Qsc from "./components/myDisplay";
import Pad from "./components/Pad";
import "./Style.css"
import { useUnit } from "effector-react";
import {
  $userInput,
  onAllClearButtonClick,
  onClearEntryButtonClick,
  onDigitButtonClick, onEqualButtonClick,
  onOperatorButtonClick, onPointButtonClick,
} from "./store/model";


function App() {

  const [userInput, AllClear, ClearEntry, DigitButton, OperatorButton, EqualButton, PointButton] = useUnit([
    $userInput,
    onAllClearButtonClick, onClearEntryButtonClick,
    onDigitButtonClick, onOperatorButtonClick,
    onEqualButtonClick, onPointButtonClick
  ]);

  return (
    <div className="App">
      <Qsc value={ userInput } />
      <Pad
        onAllClearButtonClick={ AllClear }
        onClearEntryButtonClick={ ClearEntry }
        onDigitButtonClick={ DigitButton }
        onOperatorButtonClick={ OperatorButton }
        onEqualButtonClick={ EqualButton }
        onPointButtonClick={ PointButton }
      />
    </div>
  );
}

export default App;
