import React from 'react';
import PropTypes from 'prop-types';
import { Layout as AntLayout } from 'antd';
import { withLayout } from 'context/layout.context.js';
import HeaderNav from '../HeaderNav';
import styles from './Layout.module.scss';

const Layout = props => {
  const { children, state } = props;
  const { Header, Footer, Content } = AntLayout;

  return (
    <AntLayout>

      <Header>
        <HeaderNav />
      </Header>
      
      <Content>
        <div className={ styles.contentContainer }>
          { children }
        </div>
      </Content>

      <Footer>
        <span>Version { state.data.ver }</span>
      </Footer>

    </AntLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

export default withLayout(Layout);