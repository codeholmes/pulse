import styles from './styles.module.css'
import Link from 'next/link'
import styled from 'styled-components'

const whiteLink = styled.a `color: white;`

export default function Footer() {
    return (
        <div>
        <div className="text-center">
            <div className={styles.footer}>
            <div className="d-flex justify-content-center text-center">
                        </div>
                <div className={styles.footerBrand}>
                <Link href="/" passHref>
                    <whiteLink>{<span style={{ cursor: 'pointer' }}>Pulse</span>}</whiteLink>
                </Link> 
                </div>
                <div className={styles.footerFont}>
                    <Link href="/about" passHref>
                        <whiteLink>{<span style={{ cursor: 'pointer' }} className={styles.footerSpace1}>About us</span>}</whiteLink>
                    </Link> 
                    <Link href="/faq" passHref>
                        <whiteLink>{<span style={{ cursor: 'pointer' }}> FAQs</span>}</whiteLink>
                    </Link> 
                        <span style={{ cursor: 'pointer' }} className={styles.footerSpace2}>
                            Social
                            </span>
                </div>
            </div>
        </div>
    </div>
    );
}