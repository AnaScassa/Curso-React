
export const CarDetails = ({brand, km, color}) => {
    //da tambem para nao colocar o props e chamar pelo nome que é enviado
    //basta colocar entre {}

  return (
    <div>
       <h2>Detalhes do carro</h2>
       <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
       </ul>
    </div>
  )
}

export default CarDetails;