import styles from "./usercard.module.css";

export default function UserCard() {
    return(
        <div className={styles.usercard}>
            <h3>Ilham Zali</h3>
            <p>Intern</p>
            <p>ID: 2022949733</p>
            <p>+60199366440</p>
        </div>
    )
}