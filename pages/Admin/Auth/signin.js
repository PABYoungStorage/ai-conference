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
                        <Image src="/admin.png" width={100} height={100} />
                        {/* <h1 style={{fontSize:"20px"}}>Admin-page!!</h1> */}
                    </div>
                    <h1>sign in</h1>
                    <Input gap="15" label="username/Email" type="text" placeholder="username" required={true} />
                    <Input gap="15" label="password" type="password" placeholder="password" required={true} />
                    <button className={styles.btn}>sign in <i class="bi bi-arrow-right"></i></button>
                    
                </div>
            </div>
        </>
    )
}