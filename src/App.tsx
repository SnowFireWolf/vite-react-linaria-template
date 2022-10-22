import { useState } from 'react'
import reactLogo from './assets/react.svg'
// style
// import "@/styles/reset.css";
// import "@/styles/global.css";
import './App.css';

import { css } from '@linaria/core';
// import { styled } from '@linaria/react';
import { styled } from '@linaria/react';



const titleClass = css`
  font-size: 3.2em;
  line-height: 1.1;
`;

const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <Logo src="/vite.svg" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <Logo src={reactLogo} className="react" alt="React logo" />
        </a>
      </div>
      <h1 className={titleClass}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
