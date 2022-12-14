import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import { CountdownContext } from "../contexts/CountdownContext"
import styles from "../styles/components/ChallengeBox.module.css"

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext)

  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSuceeded() {
    completedChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} XP</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >Falhei</button>
            <button
              type="button"
              className={styles.challengeCompletedButton}
              onClick={handleChallengeSuceeded}
            >Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>
            Finalize um ciclo para <br />
            receber um desafio
          </strong>

          <p>
            <img src="icons/level-up.svg" alt="Level-UP" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  )
}