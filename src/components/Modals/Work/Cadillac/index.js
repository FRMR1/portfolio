import React from "react"

import Draggable from "react-draggable"
import { connect } from "react-redux"
import X from "../../../../assets/images/svg/x.svg"
import XWhite from "../../../../assets/images/svg/x-white.svg"
import CadillacSVG from "../../../../assets/images/svg/cadillac.svg"
import styles from "../../../../styles/modals.module.scss"

class Cadillac extends React.Component {
    onStart = () => {
        this.props.onIncZIndex()
    }

    render() {
        const width = this.props.width / 3
        const height = this.props.height / 1.5

        const xPos = Math.random() * (this.props.width - width)
        const yPos = Math.random() * (this.props.height - height - 135) // Screen height minus modal, toolbars

        const dragHandlers = { onStart: this.onStart }

        return (
            <Draggable
                handle=".handle"
                bounds="body"
                defaultPosition={{ x: xPos, y: yPos }}
                {...dragHandlers}
            >
                <div
                    className={`${styles.modal} ${
                        this.props.isDarkMode ? styles.modaldark : ""
                    } ${
                        this.props.isCadillacOpen
                            ? styles.modalVisible
                            : styles.modalHidden
                    }`}
                    style={{
                        zIndex: this.props.zIndex,
                    }}
                    onClick={this.props.onIncZIndex}
                >
                    <div
                        className={`${styles.modalBar} ${
                            this.props.isDarkMode ? styles.modalBardark : ""
                        } handle`}
                    >
                        <span className={styles.heading}>Cadillac</span>
                        {this.props.isDarkMode ? (
                            <X
                                className={styles.close}
                                onClick={this.props.onCadillacClose}
                                width={12}
                            />
                        ) : (
                            <XWhite
                                className={styles.close}
                                onClick={this.props.onCadillacClose}
                                width={12}
                            />
                        )}
                    </div>
                    <div
                        className={styles.body}
                        style={{ height: height, width: width }}
                    >
                        <CadillacSVG width={120} />
                        <p>The Cadillac website is built using Three.js.</p>
                        <h4>Tech Stack</h4>
                        <ul>
                            <li>
                                <span>React</span>
                            </li>
                            <li>
                                <span>Next.js</span>
                            </li>
                            <li>
                                <span>GraphQL</span>
                            </li>
                            <li>
                                <span>Apollo Server/Client</span>
                            </li>
                        </ul>
                        <div className={styles.btnContainer}>
                            <a className={styles.btn} href="#" target="_blank">
                                View Live
                            </a>
                            <a className={styles.btn} href="#" target="_blank">
                                View Source
                            </a>
                        </div>
                    </div>
                </div>
            </Draggable>
        )
    }
}

const mapStateToProps = state => {
    return {
        isDarkMode: state.darkMode,
        isCadillacOpen: state.isCadillacOpen,
        zIndex: state.zIndexes.cadillac,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCadillacClose: () => dispatch({ type: "CLOSE_CADILLAC" }),
        onIncZIndex: () => dispatch({ type: "INC_Z_CADILLAC" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadillac)
