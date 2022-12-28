import React from 'react'
import styles from "./Welcome.module.css"
import educationQuizz from "../../imgs/education-quizz.svg"

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h2>Seja Bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={educationQuizz} alt="tela inicial" />
    </div>
  )
}

export default Welcome