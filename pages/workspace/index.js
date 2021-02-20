import React, {Component} from 'react'
import Layout from '../../components/HomePage/Layout'
import Navbar from '../../components/HomePage/Navbar'
import Footer from '../../components/HomePage/Footer'
import TabSwitch from '../../components/Workspace/TabSwitch'
import styles from './styles.module.css'

class workspace extends Component {

  render() {
    return (
      <div className={styles.containerColor}>
      <Layout>
          <span>
            <Navbar/>
            <TabSwitch/>
            <Footer/>
          </span>
      </Layout>
    </div>
    );
  }
}

export default workspace;