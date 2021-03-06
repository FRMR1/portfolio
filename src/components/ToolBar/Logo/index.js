import React from "react"
import styles from "../../../styles/toolbar.module.scss"

const Logo = props => {
    return (
        <div className={styles.logo}>
            <svg version="1.1" viewBox="0 0 49.7 49.7" width="155">
                <g>
                    <g>
                        <polygon
                            className={styles.logoPath}
                            points="20.2,21.9 33.3,35.1 33.3,26.6 28.6,21.9"
                        />
                    </g>
                    <g>
                        <g>
                            <g>
                                <polygon
                                    className={styles.logoPath}
                                    points="33.3,12.5 32.4,13.5 19.2,13.5 18.3,12.5 13.6,12.5 10.8,15.4 10.8,20 11.7,21 11.7,29.4 
					                10.8,30.4 10.8,35.1 18.3,42.6 18.3,20 33.3,20 40.8,12.5"
                                />
                            </g>
                        </g>
                        <path
                            className={styles.logoPath}
                            d="M24.8,49.7c-6.6,0-12.9-2.6-17.6-7.3C2.6,37.7,0,31.5,0,24.8C0,18.2,2.6,12,7.3,7.3C12,2.6,18.2,0,24.8,0
                            c6.6,0,12.9,2.6,17.6,7.3c4.7,4.7,7.3,10.9,7.3,17.6c0,6.6-2.6,12.9-7.3,17.6C37.7,47.1,31.5,49.7,24.8,49.7L24.8,49.7z M24.8,2.8
                            C19,2.8,13.4,5.1,9.3,9.3C5.1,13.4,2.8,19,2.8,24.8c0,5.9,2.3,11.4,6.4,15.6c4.2,4.2,9.7,6.4,15.6,6.4c5.9,0,11.4-2.3,15.6-6.4
                            c4.2-4.2,6.4-9.7,6.4-15.6c0-5.9-2.3-11.4-6.4-15.6C36.3,5.1,30.7,2.8,24.8,2.8L24.8,2.8z"
                        />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Logo
