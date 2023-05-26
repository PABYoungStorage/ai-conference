import styles from "@/styles/selected.module.css"
import Image from "next/image"

export default function selected() {
    return (
        <>
            <div className={styles.doodle}>
                <Image alt="" src="/Doodle Dots.png" height={100} width={150} />
            </div>

            <div className={styles.select}>
                <div className={styles.logo}>
                    <Image alt="userlogo" src="/logo.png" width={70} height={80} />
                    <div className={styles.gap}>
                        <Image alt="userlogo" src="/User.png" width={30} height={30} />
                        <Image alt="" src="/Notification.png" width={30} height={30} />
                    </div>
                </div>

                <div className={styles.selectbox}>
                    <h1>Upload Your Conference paper</h1>
                    <span>Paper Detail And The Instruction Part Work Here </span>


                    <div className={styles.pdf}>
                        <Image alt="" src="/File.png" width={50} height={50} />
                        <h3>Paper-1-anish.pdf</h3>
                        <div className={styles.colour}>
                            <span></span><b>100</b>
                        </div>
                    </div>
                    <div className={styles.btnflex}>
                        <button className={styles.btnback}>back</button>
                        <button className={styles.btn}>next</button>
                    </div>

                </div>
            </div>
        </>
    )
}