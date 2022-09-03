import styles from "../styles/components/CompleteChallenges.module.css"

import { ChallengesContext } from "../contexts/ChallengesContext"
import { useContext } from "react"

export function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <div className={styles.challenges}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}