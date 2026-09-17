// componentes
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/CondicionalRender";
import { ShowUserName } from "./components/ShowUserName";
import { CarDetails } from "./components/CarDetails";

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
      <br />
      <br />
      <br />
      <ShowUserName name="Matheus"/>
      <CarDetails brand="BMW" km={100000} color="Azul"/>
    </div> 
  )
}

export default App