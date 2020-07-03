import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/index'
import SignUp from './pages/SignUp/index'

const App = () => {
  return (
    <>
      <SignUp />
      <GlobalStyle />
    </>
  );
}

export default App;
