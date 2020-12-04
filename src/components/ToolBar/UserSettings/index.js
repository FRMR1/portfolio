import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import styles from "../../../styles/toolbar.module.scss"
import axios from "axios"

const UserSettings = props => {
    const [userData, setUserData] = useState({
        city: null,
        region: null,
        countryCode: null,
        lat: null,
        lon: null,
        timezone: null,
        isp: null,
    })

    const onClickFn = () => {
        props.onOpenSettings()
        props.onIncZIndex()
    }

    useEffect(() => {
        axios
            .get(
                "https://cors-anywhere.herokuapp.com/http://ip-api.com/json/70.65.236.65"
            )
            .then(response => {
                setUserData({
                    city: response.data.city,
                    region: response.data.region,
                    countryCode: response.data.countryCode,
                    lat: response.data.lat,
                    lon: response.data.lon,
                    timezone: response.data.timezone,
                    isp: response.data.isp,
                })
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className={styles.userSettings} onClick={onClickFn}>
            <div className={styles.iconContainer}>
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 121.3 121.3"
                >
                    <path
                        className={styles.userSettingsPath}
                        d="M55.5,120.8c-5,0-9.1-3.5-9.9-8.4l-1-6.2l-0.3-0.1c-1.4-0.5-2.7-1.1-4-1.7l-0.3-0.1l-5.2,3.7c-1.7,1.2-3.7,1.9-5.9,1.9
                        c-2.7,0-5.2-1.1-7.1-3l-7.1-7.1c-3.5-3.5-4-9-1.1-13l3.6-5l-0.1-0.3c-0.7-1.4-1.3-2.9-1.8-4.2l-0.1-0.3l-6.3-1
                        c-4.9-0.8-8.4-5-8.4-10V55.9c0-4.9,3.6-9.1,8.4-9.9l6.1-1.1l0.1-0.3c0.5-1.4,1.1-2.9,1.7-4.3l0.1-0.3l-3.7-5.2
                        c-2.9-4-2.4-9.5,1.1-13l7.2-7.1c1.9-1.9,4.5-3,7.2-3c2.1,0,4.2,0.7,5.9,1.9l5,3.6l0.3-0.1c1.4-0.7,2.8-1.3,4.2-1.8l0.3-0.1l1-6.3
                        c0.8-4.9,5-8.4,9.9-8.4h10c5,0,9.2,3.5,10,8.4l1.1,6.1l0.3,0.1c1.5,0.5,3.1,1.2,4.5,1.9l0.3,0.1l5.1-3.7c1.7-1.2,3.7-1.9,5.8-1.9
                        c2.7,0,5.2,1,7.1,3l7.2,7.1c3.5,3.5,4,9,1.1,13l-3.7,5.1l0.1,0.3c0.6,1.3,1.2,2.7,1.8,4.3l0.1,0.3l6.2,1c4.9,0.8,8.5,5.1,8.4,10v10
                        c0,5-3.5,9.2-8.4,10l-6.2,1l-0.1,0.3c-0.5,1.4-1.1,2.8-1.8,4.3l-0.1,0.3l3.6,5.1c2.9,4,2.4,9.5-1.1,13l-7.1,7.1
                        c-1.9,1.9-4.4,3-7.1,3h0c-2.1,0-4.2-0.7-5.9-1.9l-5.1-3.6l-0.3,0.1c-1.4,0.6-2.8,1.2-4.3,1.8l-0.3,0.1l-1,6.2c-0.8,4.9-5,8.4-10,8.4
                        H55.5z M39.8,97.8c0.5,0,1.1,0.1,1.5,0.4c2.1,1.1,4.4,2,6.7,2.8c1.2,0.4,2.1,1.4,2.3,2.6l1.3,7.8c0.3,1.9,2,3.3,3.9,3.3h10.1
                        c2,0,3.6-1.4,4-3.3l1.3-7.8c0.2-1.2,1.1-2.2,2.3-2.6c2.4-0.7,4.7-1.7,6.9-2.9c0.5-0.2,1-0.4,1.5-0.4c0.7,0,1.4,0.2,1.9,0.6l6.5,4.6
                        c0.7,0.5,1.5,0.7,2.3,0.7c0,0,0,0,0,0c1.1,0,2.1-0.4,2.8-1.1l7.1-7.1c1.4-1.4,1.6-3.6,0.4-5.2l-4.6-6.5c-0.7-1-0.8-2.4-0.2-3.5
                        c1.2-2.2,2.2-4.6,2.9-7c0.4-1.2,1.4-2.1,2.6-2.3l7.8-1.3c1.9-0.3,3.3-2,3.3-4l-0.1-10.2c0-1.9-1.4-3.6-3.3-3.9l-7.8-1.3
                        c-1.2-0.2-2.2-1.1-2.6-2.3c-0.7-2.4-1.7-4.7-2.9-6.9c-0.6-1.1-0.5-2.5,0.2-3.5l4.6-6.5c1.1-1.6,1-3.8-0.4-5.1l-7.1-7.1
                        c-0.7-0.7-1.7-1.1-2.8-1.1c-0.9,0-1.7,0.3-2.3,0.7l-6.5,4.6c-0.6,0.4-1.2,0.6-1.9,0.6c-0.5,0-1.1-0.1-1.5-0.4
                        c-2.3-1.2-4.7-2.3-7.2-3c-1.2-0.4-2.1-1.4-2.3-2.6l-1.3-7.7c-0.3-1.9-2-3.3-3.9-3.3h-10c-2,0-3.6,1.4-4,3.3l-1.4,8
                        c-0.2,1.2-1.1,2.2-2.3,2.6c-2.4,0.8-4.8,1.8-7,2.9c-0.5,0.3-1,0.4-1.6,0.4c-0.7,0-1.4-0.2-1.9-0.6l-6.4-4.6
                        c-0.7-0.5-1.5-0.7-2.3-0.7c0,0,0,0,0,0c-1.1,0-2.1,0.4-2.8,1.1l-7.1,7.1c-1.4,1.4-1.5,3.6-0.4,5.2l4.6,6.6c0.7,1,0.8,2.4,0.2,3.5
                        c-1.1,2.2-2.1,4.6-2.8,7c-0.4,1.2-1.4,2.1-2.6,2.3l-7.7,1.3c-1.9,0.3-3.3,2-3.3,4v10c0,2,1.4,3.6,3.3,4l8,1.4
                        c1.2,0.2,2.2,1.1,2.6,2.3c0.8,2.4,1.7,4.7,2.9,6.9c0.6,1.1,0.5,2.5-0.2,3.5l-4.6,6.4c-1.2,1.6-1,3.8,0.5,5.2l7.1,7.1
                        c0.7,0.7,1.7,1.1,2.8,1.1l0.1,0c0.8,0,1.6-0.3,2.3-0.7l6.6-4.7C38.4,98,39.1,97.8,39.8,97.8L39.8,97.8z"
                    />
                    <path
                        className={styles.userSettingsPath}
                        d="M60.6,83.8c-12.7,0-23.1-10.4-23.1-23.1c0-12.7,10.4-23.1,23.1-23.1c12.7,0,23.1,10.4,23.1,23.1
	                    C83.7,73.4,73.4,83.8,60.6,83.8z M60.6,43.7c-9.4,0-17,7.6-17,17s7.6,17,17,17c9.4,0,17-7.6,17-17C77.6,51.3,70,43.7,60.6,43.7z"
                    />
                </svg>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
        zIndex: state.zIndexes.settings,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOpenSettings: () => dispatch({ type: "OPEN_SETTINGS" }),
        onIncZIndex: () => dispatch({ type: "INC_Z_SETTINGS" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings)
