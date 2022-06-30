import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40'/>
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/svvictorelias.png" alt="" />
        <strong>Victor Elias</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}