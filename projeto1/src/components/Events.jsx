const Events = () => {

    const handleMyEvent = (e) => {
        console.log('Evento disparado!', e);
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    const soma = (a, b) => {
        return a + b;
    }

    return(
        <div>
            <h1>Eventos</h1>
            <p>Clique para disparar um evento:</p>
            {
            // função é disparada no click do botão
            // da para chamar uma função diretamento no onClick, ou criar uma função e chamar ela no onClick
            }
            <button onClick={handleMyEvent}>Clique aqui</button>
            <button onClick={(e) => console.log('Outro evento disparado!', e)}>Clique aqui também</button>
            
            {renderSomething(true)}
            {renderSomething(false)}

            <input type="number" id="number1"/>
            <input type="number" id="number2"/>
            <button onClick={() => console.log('O resultado da soma é:', 
                soma(Number(document.getElementById('number1').value), Number(document.getElementById('number2').value)))}>
                Calcular Soma
            </button>
        </div>

    )

}

export default Events;