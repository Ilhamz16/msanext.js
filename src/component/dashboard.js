
import Link from "next/link";
import styles from "./style.module.css"; // Import CSS file

export default function DashboardPage() {
    return (
        <div>
            <ul className={styles["navigation-bar"]}>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/activities">Activity</Link></li>
                <li><Link href="/workgroups">Workgroups</Link></li>
                <li style={{float: 'right'}}><Link href="/about">About</Link></li>
                
            </ul>
            
        </div>
    );
}
