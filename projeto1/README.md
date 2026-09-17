# React + Vite

Este projeto foi criado com Vite para iniciar um app React de forma mais rápida e moderna, em vez de usar o `create-react-app`.

Para criar um projeto como este, normalmente usa-se:

```bash
npm create vite@latest
```

## Estrutura base

- `node_modules`: dependências instaladas do projeto;
- `public`: arquivos estáticos e HTML de inicialização;
- `src`: onde fica o código da aplicação;
- `src/main.jsx`: ponto de entrada do React;
- `src/App.jsx`: componente principal da aplicação;
- `src/index.css`: estilos globais;
- `src/App.css`: estilos do componente principal.

## Como rodar

```bash
npm install
npm run dev
```

A aplicação ficará disponível no navegador em uma porta local do Vite, geralmente `http://localhost:5173`.

___

# Fundamentos do React

- Os componentes em React geralmente seguem a convenção PascalCase, como `FirstComponent`.
- Um componente é uma função que retorna JSX.
- JSX é a sintaxe semelhante ao HTML usada no React.
- Tudo que estiver dentro de `{}` será interpretado como JavaScript.
- Em React, usamos `className` em vez de `class`.
- `onClick` é um evento do navegador que executa uma função quando o usuário clica.
- **Props** são informações passadas de um componente pai para um componente filho.
- **St vaate** é umlor interno do componente que pode mudar durante a execução da aplicação.
- Em React, o ideal é controlar inputs com `useState` e `onChange`, em vez de acessar o DOM manualmente.
- Componentes pequenos e reutilizáveis ajudam a organizar melhor a aplicação.

## Imagem

Existem duas formas de guardar imagens no React:

* `public` → pode ser acessada diretamente pelo caminho.
* `src/assets` → precisa ser importada e pode ser usada como uma variável.

```jsx
import imagem from "./assets/imagem.png";
```

## Hooks

- Hooks são recursos do React usados para adicionar funcionalidades aos componentes, como **guardar e alterar estados**.
- Todos os Hooks começam com `use`, por exemplo: `useState`, `useEffect`.
- Também podemos criar **Custom Hooks**, que são Hooks personalizados para reutilizar lógica.
- Os Hooks precisam ser importados quando necessário.

### useState 

O `useState` é usado para **criar e alterar estados** dentro de um componente.

```jsx
const [nome, setNome] = useState("Ana");
```

* `nome` → valor atual do estado.
* `setNome` → função usada para alterar o estado.
* `"Ana"` → valor inicial.

Para alterar:

```jsx
setNome("Caroline");
```

# A propriedade `key`

O React precisa de uma `key` **única** para cada item de uma lista.
Geralmente usamos o `id` do próprio dado:

```jsx
{usuarios.map(usuario => (
  <p key={usuario.id}>{usuario.nome}</p>
))}
```

A `key` ajuda o React a **identificar cada item e atualizar a lista corretamente** quando ela muda.

# Operador Ternário

O operador ternário é usado no React para **fazer condições diretamente no JSX**.
Ele funciona como um `if/else` simplificado:

```jsx
condição ? resultadoSeVerdadeiro : resultadoSeFalso
```

Exemplo:

```jsx
{logado ? <p>Bem-vindo!</p> : <p>Faça login.</p>}
```

* Se `logado` for `true` → mostra **"Bem-vindo!"**.
* Se `logado` for `false` → mostra **"Faça login."**.

# Props

`Props` são informações que podemos **passar de um componente pai para um componente filho**.
É como passar parâmetros para um componente.

```jsx
function App() {
  return <Usuario nome="Ana" />;
}

function Usuario(props) {
  return <p>Olá, {props.nome}!</p>;
}
```

Também podemos desestruturar as props:

```jsx
function Usuario({ nome }) {
  return <p>Olá, {nome}!</p>;
}
```

* `nome="Ana"` → prop enviada pelo componente pai.
* `{ nome }` → prop recebida pelo componente filho.

# Desestruturação de Props

A desestruturação permite **pegar as props diretamente nos parâmetros do componente**, sem precisar usar `props.nome`.
Sem desestruturação:

```jsx
function Usuario(props) {
  return <p>{props.nome}</p>;
}
```

Com desestruturação:

```jsx
function Usuario({ nome }) {
  return <p>{nome}</p>;
}
```

Também podemos receber várias props:

```jsx
function Usuario({ nome, idade }) {
  return <p>{nome} - {idade} anos</p>;
}
```

* `{ nome, idade }` → pega as props diretamente.
* Deixa o código **mais curto e fácil de ler**.

