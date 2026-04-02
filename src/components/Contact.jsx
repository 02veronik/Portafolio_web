import styles from '../styles/Contact.module.css'
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaGithub   } from "react-icons/fa";


function Contact(){
    return (
        <>
        <section id="contact" className={styles.contact}>
            <p className={styles.subtitle}>Mantengámonos en contacto</p>
            <h2 className={styles.title}>Contacto</h2>

            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.header}>
                        <span className={styles.icon}><MdOutlineMarkEmailUnread /></span>
                        <h4>Correo</h4>
                    </div>
                  
                    <p>vero.lopez.za@gmail.com</p>
                </div>

                <div className={styles.item}>
                     <div className={styles.header}>
                        <span className={styles.icon}><FaPhoneAlt /></span>
                        <h4>Celular</h4>
                    </div>
                    
                    <p>+51 921351292</p>
                </div>

                <div className={styles.item}>
                     <div className={styles.header}>
                        <span className={styles.icon}><IoShareSocialSharp /></span>
                        <h4>Redes Sociales</h4    >
                    </div>
                
                    <div className={styles.socialmedia}>
                        <span><a href="https://www.linkedin.com/in/veronica-lopez02/" target='_blank'><FaLinkedin /></a></span>
                        <span><a href="https://github.com/02veronik" target='_blank'><FaGithub  /></a></span>
                    </div>
                </div>
  

            </div>
        </section>
        </>
    )
}

export default Contact