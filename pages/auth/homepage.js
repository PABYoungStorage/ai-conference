import styles from "@/styles/home.module.css"
import Image from "next/image"
export default function homepage() {
    return (
        <div className={styles.home}>
            <nav>
                <Image alt="" src="/logo.png" width={100} height={100}/>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Comitte</a></li>
                    <li><a href="">Paper Menu</a></li>
                    <button>SignIn</button>
                </ul>
                {/* <button>SignIn</button> */}
            </nav>
        </div>
    )
}