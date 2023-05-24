import styles from '@/styles/Signup.module.css'
import { Input } from '@/components/input'
import Link from 'next/link'
export default function Signin() {
    return (
        <div className={styles.signup}>
            <div className={styles.signupbox}>
                <h2>Register</h2>
                <h1>International Conference</h1>
                <h3>on Artificial intelligence and Predictive analytics in Fusion research</h3>
                <div className={styles.email}>
                    <span className="correct">Connect With us</span>
                    <Input type="email" placeholder="email" />
                    <button className={styles.btn}>Subscribe</button>
                   
                </div>
                <span className={styles.acc}>Already have an account? <b><Link href="/auth/signin">sign in</Link></b></span>
            </div>
        </div>
    )
}