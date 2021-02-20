import React, {Component} from 'react'
import Layout from '../../components/HomePage/Layout'
import Navbar from '../../components/HomePage/Navbar'
import FAQs from '../../components/FAQs'
import Footer from '../../components/HomePage/Footer'
import styles from './styles.module.css'

class about extends Component {
  render() {
    return (
      <div className={styles.containerColor}>
      <Layout>
          <div className={styles.containerSize}>
            <Navbar/>
            <FAQs/>
          </div>
          <Footer/>
      </Layout>
    </div>
    );
  }
}

export default about;