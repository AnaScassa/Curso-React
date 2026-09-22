// componentes
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/CondicionalRender";
import { ShowUserName } from "./components/ShowUserName";
import { CarDetails } from "./components/CarDetails";
import { Container } from "./components/Container";
import ExecuteFuncion from "./components/ExecuteFuncion";
import ChangeMassageState from "./components/ChangeMassageState";
import MyForm from "./components/MyForm";

//style / css
import './App.css'
import { useState } from "react";
import Massage from "./components/Massage";

function App() {
  const cars = [
      {id: 1, brand: "carro velho", color: "Amarelo"}
  ];

  function showMessage(){
    console.log("Evento do componente pai");
  }

  const [massage, setMassage] = useState("");

  const handleMassage = (msg) => {
    setMassage(msg);
  }

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
      {//metodo looping de lista
      cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
    <br/>
    <br />
    <br />    
    <Container>
      <p>Este paragrafo é um children</p>
    </Container>
    <ExecuteFuncion myFuncion={showMessage} />
    <Massage msg={massage}/>
    <ChangeMassageState handleMassage={handleMassage}/>
    <br/>
    <br />
    <br /> 
    <MyForm/>
    </div> 
    
  )
}

export default App