import styles from "@/styles/Components.module.css"

export const Input = (props)=>{
    return(
        <div className={styles.inputcontainer} style={{marginTop:`${props.gap}px`}}>
            <label>{props.label}</label>
            <input className={styles.input} {...props} style={{marginTop:`${parseInt(props.gap)-9}px`}} />
        </div>
    )
}