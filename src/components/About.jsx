import aboutImg from '../assets/veronicaabout.jpeg'
import styles from '../styles/About.module.css'




function About(){
    return(
        <>
        <section id="about" className={styles.aboutme}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={aboutImg} alt="veronica2" />
                </div>
                <div className={styles.text}>
                    <h2>Sobre mí</h2>
                    <p>Soy Bachiller en Ingeniería de Sistemas enfocada en el desarrollo FrontEnd. Me especializo en crear interfaces limpias, modernas y funcionales, cuidando la experiencia del usuario y los detalles visuales. Me encuentro en constante aprendizaje y mejora profesional.</p>
               
                    <div className={styles.info}>
                        <div className={styles.item}><b>🎓 Carrera:</b> Ing. Sistemas</div>
                        <div className={styles.item}><b>🎂 Cumpleaños:</b> 02 de febrero</div>
                        <div className={styles.item}><b>📍 Ciudad: </b>Trujillo - Perú</div>  
                        <div className={styles.item}><b>📧 Freelance: </b>Disponible</div>
                        <div className={styles.item}><b>💼 Correo: </b>vero.lopez.za@gmail.com</div>
                    </div> 
                </div>
            </div>
            
        </section>
        </>
    )
}

export default About