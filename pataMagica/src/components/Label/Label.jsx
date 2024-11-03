import styles from './Label.module.css'

export function Label({label, tagInput}){
    return(
        <>
            <label htmlFor={tagInput} className={styles.labels}>{label}</label>
        </>
    )
}