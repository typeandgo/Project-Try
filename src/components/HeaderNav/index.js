import React from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './HeaderNav.module.scss';
import { login, logout } from 'store/reducers/auth/auth.reducer';

const HeaderNav = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);
  
  return (
    <div className={ styles.headerNav }>

      <div className={ styles.logo }></div>

      <Menu theme='dark' mode='horizontal'>
        <Menu.Item key='home'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='about'>
          <Link to='/about'>About</Link>
        </Menu.Item>
        <Menu.Item key='maps'>
          <Link to='/maps'>Maps</Link>
        </Menu.Item>
        <Menu.Item key='maps2'>
          <Link to='/maps2'>Maps2</Link>
        </Menu.Item>
        <Menu.Item key='counter'>
          <Link to='/counter'>Counter</Link>
        </Menu.Item>
        <Menu.Item key='pokemon'>
          <Link to='/pokemon'>Pokemon</Link>
        </Menu.Item>
        <Menu.Item key='todo'>
          <Link to='/todo'>Todo</Link>
        </Menu.Item>
      </Menu>

      <div className={ styles.userMenu }>
        { user?.name }
        { ' ' }
        {
          isAuthenticated 
            ? <Button size='small' type='primary' onClick={ () => dispatch(logout()) }>Logout</Button>
            : <Button size='small' type='primary' onClick={ () => dispatch(login({ name: 'engin' })) }>Login</Button>
        }
      </div>

    </div>
  );
};

export default HeaderNav;