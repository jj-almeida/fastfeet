import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/deliveries">
            <img src={logo} alt="FastFeet" />
          </Link>
          <div>
            <NavLink to="/deliveries" activeClassName="selected">
              ENCOMENDAS
            </NavLink>
            <NavLink to="/deliverymans" activeClassName="selected">
              ENTREGADORES
            </NavLink>
            <NavLink to="/recipients" activeClassName="selected">
              DESTINATÁRIOS
            </NavLink>
            <NavLink to="/problems" activeClassName="selected">
              PROBLEMAS
            </NavLink>
          </div>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <Link to="/" onClick={handleSignOut}>
                sair do sistema
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
