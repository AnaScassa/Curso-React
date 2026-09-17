

export const ShowUserName = (props) => {
    //props é usado para pegar as 
    //informações que estao sendo passadas pela outra página

  return (
    <div>
        <h2>O nome do usuário é: {props.name}</h2>
    </div>
  )
}

export default ShowUserName;