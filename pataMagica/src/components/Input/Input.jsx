import styles from './Input.module.css'

export function Input({type, placeholder, value, onChange,tagInput}){
    return(
        <>
            <input type={type} id={tagInput} placeholder={placeholder} value={value} onChange={onChange}/>            
        </>
    )
}