import { useState } from "react";

const ListRender = () => {
    const [list, setList] = useState([
        {id: 1, name: "Matheus"},
        {id: 2, name: "João"},
        {id: 3, name: "Maria"},
        {id: 4, name: "José"},
        {id: 5, name: "Ana"},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);
        setList((prevList) => prevList.filter((item) => item.id !== randomNumber));
        //esse prevList é o valor anterior da lista, 
        //que é passado para a função filter, que vai retornar uma nova lista sem o item que foi deletado
    }

  return (
    <div>
        <ul>
            {list.map((item) => (
                //precisa só de um li para imprimir a lista 
                //mas dai precisa de uma key para cada item da lista,
                //para o react saber qual item foi alterado, adicionado ou removido
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random</button>
    </div>
  )
}

export default ListRender