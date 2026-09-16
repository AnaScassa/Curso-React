// componentes
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";

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
    </div>
  )
}

export default App