import Head from "next/head"
import styles from "@/styles/Signin.module.css"
import Image from "next/image"
import { Input } from "@/components/input"
import Link from "next/link"

export default function Signin() {
    return (
        <>
            <Head>
                <title>Sign In - page</title>
            </Head>
            <div className={styles.signin}>
                <div className={styles.box}>
                    <div style={{ textAlign: "center" }} >
                        <Image src="/logo.png" width={100} height={100} />
                    </div>
                    <h1>sign in</h1>
                    <Input gap="15" label="username/Email" type="text" placeholder="username" required={true} />
                    <Input gap="15" label="password" type="password" placeholder="password" required={true} />
                    <button className={styles.btn}>sign in <i class="bi bi-arrow-right"></i></button>
                    <span>don't have an account? <b><Link href="/auth/signup">sign up</Link></b></span>
                </div>
            </div>
        </>
    )
}