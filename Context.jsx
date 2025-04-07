import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';



const ThemeContext = createContext('light');


    const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};



const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const lightStyle = {
    backgroundColor: 'blue',
    color: 'yellow',
    padding: '20px',
    textAlign: 'center',
  };


  const darkStyle = {
    backgroundColor: 'black',
    color: 'biege',
    padding: '20px',
    textAlign: 'center',
  };



  const currentStyle = theme === 'light' ? lightStyle : darkStyle;

  return (
    <div style={currentStyle}>
      <p>The current theme is {theme}.</p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </div>
  );
};



const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
