import styles from "@/styles/login.module.css"
import { Tracker } from "@/components/tracker"
import Head from "next/head"
export default function login() {
    return (
        <>
            <Head>
                <title>login - user details</title>
            </Head>
            <div className={styles.login}>
                <div className={styles.loginbox}>
                    <h1>Login Detail's</h1>
                    <Tracker />
                    <div className={styles.flex}>
                        <div>
                            <InputCustom required={true} label="username" type="text" placeholder="username" />
                            <InputCustom label="Email" type="email" placeholder="Email" />
                            <InputCustom required={true} label="password" type="text" placeholder="password" />
                            <InputCustom required={true} label="Confirm Password" type="text" placeholder="Confirm Password" />
                        </div>
                        <button className={styles.btn}>next</button>
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

