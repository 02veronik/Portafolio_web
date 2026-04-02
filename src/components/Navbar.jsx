import styles from '../styles/Navbar.module.css'
import { useState, useEffect } from 'react'
import { IoMenu } from "react-icons/io5";

function Navbar(){
    
    const [scrolled, setScrolled] = useState(false)

    useEffect (() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])       

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>

            <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
                <IoMenu />
            </div>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`} >
                <li><a href="#hero">Inicio</a></li>
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Portafolio</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar