import React from 'react';

import Logo from '~/assets/logo.svg';
// import { Container } from './styles';

const SignIn = () => {
  return (
    <>
      <img src={Logo} alt="Gamecred" />
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Acessar</button>
      </form>
    </>
  );
};

export default SignIn;
