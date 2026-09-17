// componentes
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import ManageData from "./components/ManageData";

//style / css
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>React!</h1>
      <FirstComponent />
      <TemplateExpressions />
      <br />
      <Events />
      <ManageData />
    </div>
  )
}

export default App