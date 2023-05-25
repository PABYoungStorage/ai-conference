import styles from "@/styles/Components.module.css"
import Image from "next/image"

export const Tracker = (props) => {
    return (
        <div className={styles.tracker}>
            <Image src="/Access.jpg" alt="Access" width={30} height={40} />
            <b></b>
            <Image src="/Contact Details.jpg" alt="Access" width={30} height={40} />
            <b></b>
            <Image src="/Call male.jpg" alt="Access" width={30} height={40} />
        </div>
    )
} 