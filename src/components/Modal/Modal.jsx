import styles from "./Modal.module.css"

export default function Modal ({onBlackClick}){




    return (
        <section className={styles.section} onClick={onBlackClick}>
                <div className={styles.modal} onClick={(e)=>e.stopPropagation()}>
                <div className={styles.iconContainer}>

                </div>
                <div className={styles.main}>
                <div className={styles.mainInner}>
                    <label className={styles.mainLabel}>Downlaod</label>
                    <h3 className={styles.mainHeading}>My Resume</h3>
                    <p className={styles.para}>Downoload the resume by filling the fields</p>
                </div>
                </div>
                    <div className={styles.secondary}>
                        <div className={styles.nameSection}>
                            <p className={styles.label}>First Name</p>
                            <input placeholder="Enter you Name..." className={styles.input} type="text" />
                        </div>
                        <div className={styles.emailSection}> 
                        <p className={styles.label}>Email</p>
                        <input placeholder="Enter your Email" className={styles.input} type="email" name="" id="" />
                        </div>
                        <div className={styles.buttonSection}>
                            <button className={styles.button}>Get Resume</button>
                        </div>
                    </div>
                </div>
        </section>
    )

}