export const Container = ({ children }) => {
    //children são componentes entre tags chamando desse componente
    //ele pode ser posicionado em qualquer lugar nesse componente

  return (
    <div>
        <h2>ChildrenProps</h2>
        {children}
    </div>
  )
}
