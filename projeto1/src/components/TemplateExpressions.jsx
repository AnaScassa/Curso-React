const TemplateExpressions = () => {

    const name = 'John';
    const data = { // criando objeto
        age: 31,
        job: 'Programmer'
    }

    return (
        <div>
            <h1>Template Expressions</h1>
            <p>Olá, {name}!</p>
            <p>Idade: {data.age}</p>
            <p>Profissão: {data.job}</p>
        </div>
    )

}

export default TemplateExpressions;