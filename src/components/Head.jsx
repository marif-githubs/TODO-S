import styles from './Head.module.css';

export const Head = () => {
    return (
        <> <div className={styles.div}>
            <button className={styles.head_pre_btn}>pre</button>
            <h1>TODO LIST</h1>
            <button className={styles.head_nex_btn}>nex</button>
        </div>
        </>
    );
}