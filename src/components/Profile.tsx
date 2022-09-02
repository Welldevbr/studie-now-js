import styles from "../styles/components/Profile.module.css"

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/welldevbr.png" alt="Wellington Santana" />

      <div>
        <strong>
          Wellington Santana
        </strong>

        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  )
}