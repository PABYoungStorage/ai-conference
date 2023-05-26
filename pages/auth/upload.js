import styles from "@/styles/upload.module.css"
import Image from "next/image"

export default function upload() {
    return (
        <>
            <div className={styles.doodle}>
                <Image alt="" src="/Doodle Dots.png" height={100} width={150} />
            </div>
            <div className={styles.upload}>
                <div className={styles.logo}>
                    <Image alt="userlogo" src="/logo.png" width={70} height={80} />
                    <div className={styles.gap}>
                        <Image alt="userlogo" src="/User.png" width={30} height={30} />
                        <Image alt="" src="/Notification.png" width={30} height={30} />
                    </div>
                </div>

                <div className={styles.uploadbox}>
                    <h1>upload your conference paper</h1>
                    <span>paper details and instruction part work here</span>


                    <div className={styles.flex}>
                        <div>
                            <InputCustom required={true} label="Title" type="text" placeholder="Title of the paper" />
                            <InputCustom required={true} label="Author" type="text" placeholder="Author of the paper" />
                        </div>
                        <div className={styles.drag}>
                            <span>Drag and Drop <br />the file or <b>click here!</b></span>
                        </div>
                    </div>
                </div>

            </div>
        </>
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