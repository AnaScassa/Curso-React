import MyComponent from './MyComponent';

// Primeiro cria a função do componente
const FirstComponent = () => {
  return ( // e da um return do que vai ter no componente
    <div>
      <h1>Hello, World!</h1>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;