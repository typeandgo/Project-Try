import React from 'react';
import Layout from 'components/Layout';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <Layout>
      <div className={ styles.home }>
        Home page
      </div>
    </Layout>
  );
};

export default Home;