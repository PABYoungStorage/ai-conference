import styles from "@/styles/personal.module.css"
import { Tracker } from "@/components/tracker"

export default function personal() {
    return(
        <div className={styles.personal}>
        <div className={styles.personalbox}>
            <h1>personal Detail's</h1>
            <Tracker />
            <div className={styles.flex}>
                <div>
                    <InputCustom required={true} label="Title" type="text" placeholder="mr" />
                    <InputCustom label="fullname" type="text" placeholder="fullname" />
                    <InputCustom required={true} label="institution/company" type="text" placeholder="institution/company" />
                    <InputCustom required={true} label="current position" type="text" placeholder="current position in organisation" />
                    <InputCustom required={true} label="faculty" type="text" placeholder="faculty" />
                    <InputCustom required={true} label="department" type="text" placeholder="department" />
                    <InputCustom required={true} label="research field" type="text" placeholder="research field" />
                </div>
                <div className={styles.btnflex}>
                <button className={styles.btnpre}>previous</button>
                <button className={styles.btn}>next</button>
                </div>
            </div>
        </div>
    </div>
    )
} 


const InputCustom = (props) => {
    return (
        <div className={styles.inputCustom}>
            <label>{props.label}<b>{props.required ? "*" : ""}</b></label>
            <input {...props} />
        </div>
    )
}