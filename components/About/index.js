import React from 'react';
import styles from './styles.module.css';

export default function About() {
    return(<div>
        <div className="d-flex justify-content-center text-center">
            <div className={styles.AboutUsGroup}>
                <div className={styles.AboutUs}>About us</div>
                <div className={styles.AboutUsContent}>Pulse is one-stop platform for productivity tools. Use our tools to get your work done.</div>
            </div>
        </div>
    </div>);
}