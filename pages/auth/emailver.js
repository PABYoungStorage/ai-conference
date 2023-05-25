import styles from '@/styles/emailver.module.css'
import { Input } from '@/components/input'


export default function emailver() {
    return (
        <div className={styles.email}>
            <div className={styles.emailbox}>
                <h2>E-mail verification</h2>
                <h1>please check the email</h1>
                <span>Enter the verification code to progress further</span>
                <div className={styles.time}>
                    <span>E-mail</span>
                    <Input type="email" placeholder="login@gmail.com" disabled={true} />
                </div>
                <div className={styles.otp}>
                    <div className={styles.otpinput}>
                        <input type='text' maxLength='1' />
                        <input type='text' maxLength='1' />
                        <input type='text' maxLength='1' />
                        <input type='text' maxLength='1' />
                        <input type='text' maxLength='1' />
                        <input type='text' maxLength='1' />
                    </div>
                    <button className={styles.btn}>verify</button>
                </div>
            </div>

        </div>
    )
}