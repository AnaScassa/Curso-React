import React, { useState } from 'react'

export const MyForm = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }
    console.log(name)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulario");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    {
                    //toda vez que alguem DIGITAR no input o formulario vai mandar os dados para o handleName 
                    }
                    <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name}/>
                </div>
                <label>
                    <span>E-mail</span>
                    <input type="email" name='email' placeholder='Digite o seu email' onChange={setEmail(e.target.value)} value={email}/>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm;