import styles from "@/styles/userpage.module.css"
import Image from "next/image"
// import { Tracker } from "@/components/tracker"

export default function userpage() {
    return (
        <>
            <div className={styles.doodle}>
                <Image alt="" src="/Doodle Dots.png" height={100} width={150} />
            </div>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Image alt="userlogo" src="/logo.png" width={70} height={80} />
                    <div className={styles.gap}>
                        <Image alt="userlogo" src="/User.png" width={30} height={30} />
                        <Image alt="" src="/Notification.png" width={30} height={30} />
                    </div>
                </div>
                <h3>Welcome Back <b>Anish</b></h3>
                <div className={styles.mark}>
                    <div className={styles.uploader}>
                        <Image alt="" src="/Upload.png" width={50} height={50} />
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.container}>
                            <h2>No of paper submitted</h2>
                            <h1>01</h1>
                        </div>
                        <div className={styles.container2}>
                            <h2>No of paper submitted</h2>
                            <h1>01</h1>
                        </div>
                        <div className={styles.container}>
                            <h2>No of paper submitted</h2>
                            <h1>01</h1>
                        </div>
                        <div className={styles.container}>
                            <h2>No of paper submitted</h2>
                            <h1>01</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}