import styles from './styles.module.css'
import Image from 'next/image'

export default function SearchModel() {
    return (<div>
        <div className={styles.searchMainContainer}>
        <div className={styles.searchModelBackground}>
            <div className={styles.searchModel}>
                <div className={styles.inputBtnGroup}>
                    <form>
                        <input className={styles.input} placeholder="Search"></input>
                    </form>
                    <div className={styles.searchLen}>
                            <Image src="/../public/search.svg"
                                                    alt="Search"
                                                    width={30}
                                                    height={25}
                                                    />
                        </div>
                </div>
            </div>
        </div>
        </div>
    </div>);
}