import React, {Component} from 'react'
import Layout from '../components/HomePage/Layout'
import Navbar from '../components/HomePage/Navbar'
import Menu from '../components/HomePage/Menu'
import GetStarted from '../components/HomePage/GetStarted'
import Products from '../components/HomePage/Products'
import Newsletter from '../components/HomePage/Newsletter'
import Footer from '../components/HomePage/Footer'
import styles from './styles.module.css'

class LandingPage extends Component {
  render() {
    return (
    <Layout>
      <div className="container-fluid" className={styles.containerFluid}>
          <Navbar/>
          <Menu/>
          <GetStarted/>
          <Products/>
          <Newsletter/>
          <Footer/>
      </div>
    </Layout>
    );
  }
}

export default LandingPage;