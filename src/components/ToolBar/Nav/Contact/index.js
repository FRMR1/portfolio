import React, { useRef } from "react"

import { connect } from "react-redux"
import styles from "../../../../styles/toolbar.module.scss"

const Contact = props => {
    const onClickFn = () => {
        props.onOpenContact()
        props.onIncZIndex()
    }

    const cssSwitch = param => {
        switch (param) {
            case "LIGHT":
                return styles.light
            case "DARK":
                return styles.dark
            case "GREY":
                return styles.grey
            default:
                return
        }
    }

    return (
        <div
            className={`${styles.nav} ${cssSwitch(props.theme)}`}
            onClick={onClickFn}
        >
            <span className={styles.navlink}>Contact</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
        zIndex: state.zIndexes.contact,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOpenContact: () => dispatch({ type: "OPEN_CONTACT" }),
        onIncZIndex: () => dispatch({ type: "INC_Z_CONTACT" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
