import styles from "@/styles/payment.module.css"
import Image from "next/image"
export default function payment() {
    return (
        <>
        <div className={styles.doodle}>
                <Image alt="" src="/Doodle Dots.png" height={100} width={150} />
            </div>
        <div className={styles.payment}>
            <div className={styles.logo}>
                <Image alt="userlogo" src="/logo.png" width={70} height={80} />
                <div className={styles.gap}>
                    <Image alt="userlogo" src="/User.png" width={30} height={30} />
                    <Image alt="" src="/Notification.png" width={30} height={30} />
                </div>
            </div>

            <div className={styles.paymentbox}>
                <h1>Confernce Payment Portal</h1>
                <Image alt="" src="/Payment.png" width={400} height={350} />
                <span>Scan And Pay Your Amount</span>
                <div className={styles.screen}>
                    <h2>After a Successful Payment Please Upload the Screenshot</h2>
                    <h4>Upload the Screenshot  <b>Click Here</b></h4>

                    <div className={styles.pdf}>
                        <Image alt="" src="/File.png" width={50} height={50} />
                        <div className={styles.name}>
                            <h3>Paper-1-anish.pdf</h3>
                        </div>
                        <div className={styles.load}>
                            <div className={styles.colour}>
                                <span></span><b>100</b>

                            </div>
                        </div>
                    </div>
                    <div className={styles.fin}>
                        <button className={styles.btn}>Finish</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    ) 
}