import styles from 'styles/Home.module.css';

export default function Grid(props) {
  return (
    <div className={styles.grid}>
        {props.children}
    </div>
  )
}
