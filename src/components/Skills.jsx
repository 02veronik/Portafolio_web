import styles from '../styles/Skills.module.css'
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiAngularSimple, DiGit, DiLaravel, DiBootstrap } from "react-icons/di"
import { IoLogoVue } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

const skills = [
    { name: "HTML", level: 90, color: "#27548A", icon: <DiHtml5/>},
    { name: "CSS", level: 80, color: "#DDA853", icon: <DiCss3 />},
    { name: "JavaScript", level: 70, color: "#BE3D2A", icon: <DiJavascript1 />},
    { name: "React", level: 70, color: "#27548A", icon: <DiReact/>},
    { name: "Angular", level: 70, color: "#DDA853", icon: <DiAngularSimple/>},
    { name: "Vue", level: 60, color: "#BE3D2A", icon: <IoLogoVue/> },
    { name: "Laravel", level: 80, color: "#27548A", icon: <DiLaravel/>},
    { name: "Bootstrap", level: 90, color: "#DDA853", icon: <DiBootstrap/>},
    { name: "Tailwind CSS", level: 80, color: "#BE3D2A", icon: <SiTailwindcss />},
    { name: "Git", level: 70, color: "#27548A", icon: <DiGit/>}
]

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.grid}>
        {skills.map((skill, index) => (
        <div className={styles.card} key={index} style={{ borderTop: `3px solid ${skill.color}` }}>
            <div className={styles.header}>
                <span className={styles.icon} style={{color: skill.color}}>{skill.icon}</span>
                <h4>{skill.name}</h4>
            </div>
            <div className={styles.bar}>
                <div className={styles.progress}  
                style={{
                  width: `${skill.level}%`,
                  background: skill.color
                }}></div>
            </div>
            <span className={styles.level}>{skill.level}%</span> 
        </div>   
        ))}
      </div>
    </section>
  )
}

export default Skills