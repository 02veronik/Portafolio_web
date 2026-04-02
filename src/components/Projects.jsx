import styles from '../styles/Projects.module.css'
import inscripcionBiblio from '../assets/inscripcionbiblioteca.png'
import imgboda from '../assets/boda.png'
import inscripcionComite from '../assets/inscripcioncomites.png'
import imgIngAmb from '../assets/ingambiental.png'
import imgFacing from '../assets/facing.png'
import { useState } from 'react';
import { FaLink } from "react-icons/fa6";
import { MdZoomIn } from "react-icons/md";


const projects =
[
    {title: "Inscripción a la Biblioteca del CCPLL", image: inscripcionBiblio, link:'https://inscripcionbiblioteca.ccpll.org/', tech: ["Vue", "MySQL", "API"]},
    {title: "Inscripción a Comités Técnicos del CCPLL", image: inscripcionComite, link:'https://inscripcion-comites.ccpll.org/', tech: ["Vue", "MySQL", "API"]},
    {title: "Invitación a una Boda", image: imgboda, link:'https://bodaangelicayeder.netlify.app/', tech: ["React", "EmailJS"]},
    {title: "Gestor de Contenidos Facultad de Ingeniería", image: imgFacing, tech: ["Laravel", "Bootstrap", "Git"]},
    {title: "Gestión docente y de inventarios", image: imgIngAmb, tech: ["NextJs", "NestJs","TypeScript","Tailwind", "Git"]},
];


function Projects (){
    const [selected, setSelected] = useState(null)

    return (
        <>
        <section id='projects' className={styles.projects}>
            <h2>Portafolio</h2>
       
            <div className={styles.grid}> 
                {projects.map((project, index) => (
                <div className={styles.card} key={index}>
                    <div className={styles.image}>
                        <img src={project.image} alt="" />
                        <div className={styles.overlay}>
                            <div className={styles.tech}>
                                {project.tech?.map((tech, index) => (
                                    <span key={index}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <h4>{project.title}</h4>  
                        <div className={styles.buttons}> 
                            {project.link && (
                                <a href={project.link} target='_blank'><FaLink /></a>
                            )
                            }
                            <button onClick={() => setSelected(project.image)} ><MdZoomIn /></button>
                            {selected && (
                                <div className={styles.modal} onClick={() => setSelected(null)}>
                                    <img src={selected} />
                                </div>
                            )}
                        </div> 
                    </div>
                   
                </div> 
                ))}
           </div> 
        
         </section>
        
        </>
    )
}

export default Projects