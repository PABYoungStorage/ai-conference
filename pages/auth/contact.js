import styles from "@/styles/personal.module.css"
import { Tracker } from "@/components/tracker"

export default function personal() {
    return(
        <div className={styles.personal}>
        <div className={styles.personalbox}>
            <h1>contact Detail's</h1>
            <Tracker />
            <div className={styles.flex}>
                <div>
                    <InputCustom required={true} label="Address" type="text" size="32" placeholder="Address" />
                    <InputCustom required={true} label="State/Province" type="text" placeholder="State/Province" />
                    <InputCustom required={true} label="PostalCode" type="text" placeholder="PostalCode" />
                    <InputCustom required={true} label="Country" type="text" placeholder="Country" />
                    <InputCustom label="Mobile No" type="text" placeholder="Mobile No" />
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