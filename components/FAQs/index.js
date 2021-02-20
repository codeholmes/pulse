import React from 'react';
import styles from './styles.module.css';

export default function FAQs() {
    return(<div>
        <div className="d-flex justify-content-center text-center">
            <div className={styles.FAQsGroup}>
                <div className={styles.FAQs}> FAQs</div>
                <div>
                    <div className={styles.Q}> What is Pomodoro Technique & Timer?</div>
                    <div className={styles.A}> The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.</div>
                </div>
            </div>
        </div>
    </div>);
}