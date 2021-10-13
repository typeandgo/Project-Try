import React from 'react';
import Layout from 'components/Layout';
import styles from './About.module.scss';

const About = () => {
  return (
    <Layout>
      <div className={ styles.about }>

        <h2 className={ styles.title }>About</h2>

        <p className={ styles.text }>Lorem ipsum dolor sit amet</p>

      </div>
    </Layout>
  );
};

export default About;