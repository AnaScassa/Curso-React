import { useState } from "react"

function CondicionalRender() {
    const [x] = useState(true)
    const [name, setName] = useState("Matheus")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Se x for false, não!</p>}
        {
        //Esse é o operador ternário, que é uma forma de fazer uma condicional em uma linha só
        }
        {name === "Matheus" ? ( //esse é o if do operador ternário
            <div>
                <h1>If ternario</h1>
                <p>O nome é Matheus</p>
            </div>
        ) : ( //esse é o else do operador ternário, que vai ser executado se a condição for falsa
            <div>
                <p>O nome não é Matheus</p>
            </div>
        )}
        <button onClick={() => {
            if(name === "Matheus"){
                setName("João")
            } else {
                setName("Matheus")
            }}}>Clique aqui
        </button>
    </div>
  )
}

export default CondicionalRender