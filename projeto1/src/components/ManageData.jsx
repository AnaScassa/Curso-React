import { useState } from "react";

const ManageData = () => {

    //estruturar dois valores como se fosse um array, como se o valor viesse de useState
    //chama a primeira do nome que quiser, e a segunda com set na frente
    const[number, setNumber] = useState(15);

  return (
    <div>
        <p>Valor: {number}</p>
        <button onClick={() => {
            if(number === 15) {
                setNumber(20)
            } else {
                setNumber(15)
            }
        }}>Alterar valor</button>
    </div>
  )
}

export default ManageData