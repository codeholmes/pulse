import React from 'react'
import styles from './styles.module.css'

export default function Newsletter() {
    return (
        <div>
            <h3 class="mb-3 text-center">
                <span className={styles.newsletter}>Stay connected <br/>
                <div className={styles.space}>
                with us </div></span></h3>
            <form>
                <div class="mb-3 text-center">
                    <input type="email" placeholder="Email" className={styles.newsletterInput}/>
                    <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary">Connect</button>
                </div>
            </form>
        </div>
    )
}