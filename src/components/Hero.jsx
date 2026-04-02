import styles from '../styles/Hero.module.css'
import image from '../assets/veroimg.png'

function Hero(){
    return (
        <section id="hero" className={styles.hero}>
            <div className={`${styles.shape} ${styles.shape1}`}></div>
            <div className={`${styles.shape} ${styles.shape2}`}></div>
            <div className={styles.shape3}></div>

            <div className={styles.container}>
                <div className={styles.text}>
                    <h1>Verónica López</h1>
                    <h3>FrontEnd Web Developer</h3>
                    <p>
                        Desarrollo interfaces web modernas, limpias y funcionales utilizando React, Angular y Vue.
                    </p>. 
                    <button className={styles.button}><a href="https://drive.google.com/file/d/1q9ZFSm2nvGUcaNuUA3fdy3OKoSb3IW4E/view?usp=sharing" target='_blank'>Ver CV</a></button>
                </div>
                <div className={styles.photo}>
                    <img src={image} alt="veronica" />
                </div>
            </div>
        </section>
    )
}

export default Hero