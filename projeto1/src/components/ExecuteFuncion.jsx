export const ExecuteFuncion = ({ myFunction }) => {3
    //aqui no myfunction estou importando por props a função do pai.

  return (
    <div>
        <button onClick={myFunction}>Clique aqui para executar a função!</button>
    </div>
  )
}

export default ExecuteFuncion;