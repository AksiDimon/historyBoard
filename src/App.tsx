import s from './body.module.css'
import { useState } from 'react'
import { Body } from './Body'
import { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';


const light: DefaultTheme = {bg: '#fff' , color: '#42567A'}
const dark: DefaultTheme  = { bg: '#000', color: '#fff' };


// .wrapper {
//   --linkColor: blue;
// }


// .wrapper.dark {
//   --linkColor: lightblue;
// }

// a {
//   color: var(--linkColor);
// }

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: ${({ theme }) => theme.bg};
    --fg: ${({ theme }) => theme.color};
  }
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.color};
    transition: background 0.3s, color 0.3s;
  }
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  function toggleTheme () {
    setIsDark((prev) => !prev)
    console.log('click')
  }
  return (
    <div  className={isDark ? "wrapper dark" : "wrapper"}>
    <ThemeProvider theme={isDark ? dark : light}>
    <GlobalStyle/>
    <div className={s.buttonThemeParent} style={{opacity: '0'}}>
      <button onClick={toggleTheme}
    className={s.buttonTheme}
    > Switch Theme 
    </button>
    </div>
    
      <Body/>
      </ThemeProvider>
    </div>
  )
}

export default App
