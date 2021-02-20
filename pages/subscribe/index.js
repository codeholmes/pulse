import React, {Component} from 'react'
import Layout from '../../components/HomePage/Layout'
import Navbar from '../../components/HomePage/Navbar'
import Payment from '../../components/Subscription'
import Footer from '../../components/HomePage/Footer'
import styles from './styles.module.css'

class billing extends Component {
  render() {
    return (
      <div className={styles.containerColor}>
      <Layout>
          <Navbar/>
          <Payment/>
          <Footer/>
      </Layout>
    </div>
    );
  }
}

export default billing;