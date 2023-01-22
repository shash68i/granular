import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import './App.css';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">Hello World</div>
      </ThemeProvider>
    </>
  );
}
export default App;
