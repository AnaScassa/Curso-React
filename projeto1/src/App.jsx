// componentes
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/CondicionalRender";

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
      <br />
      <br />
      <br />
      <ListRender />
      <ConditionalRender/>
    </div> 
  )
}

export default App