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

