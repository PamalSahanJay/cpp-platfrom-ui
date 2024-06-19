import React from "react";
import styles from "./dsicon.css";

export function DsIcon() {
    return (
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="120 150 250 220">
            <path className={styles.st0} d="M151,255"/>
            <polyline className={styles.st1} points="151,255 151,201 297.6,201 297.6,223 297.6,293 151,293 151,273 "/>
            <polyline className={styles.st1} points="298.6,229 334,229 354,273 354,293 298.6,293 "/>
            <circle className="st0" cx="182" cy="293" r="20"/>
            <circle className="st0" cx="325.3" cy="293" r="20"/>
            <line className={styles.st2} x1="130" y1="219" x2="182" y2="219"/>
            <line className={styles.st2} x1="108" y1="235" x2="137" y2="235"/>
            <line x1="137" y1="255" x2="198" y2="255"/>
            <line x1="130" y1="273" x2="162" y2="273"/>
        </svg>
    )
}