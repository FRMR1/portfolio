import React from "react"

import Draggable from "react-draggable"
import { connect } from "react-redux"
import CadillacSVG from "../../../../assets/images/svg/cadillac.svg"
import styles from "../../../../styles/modals.module.scss"

class Cadillac extends React.Component {
    onStart = () => {
        this.props.onIncZIndex()
    }

    render() {
        const innerWidth = window.innerWidth
        const innerHeight = window.innerHeight

        const getYPos = () => {
            const yPos =
                innerHeight - this.props.height - this.props.toolbar - 40
            if (yPos < 0) {
                return 0
            } else {
                return yPos
            }
        }

        const xPos = Math.random() * (innerWidth - this.props.width)
        const yPos = Math.random() * getYPos()

        const dragHandlers = { onStart: this.onStart }

        const onClickClose = e => {
            e.stopPropagation() // Stop z-index increment on mouse down if closing modal
        }

        const cssSwitch = param => {
            switch (param) {
                case "LIGHT":
                    return styles.light
                case "DARK":
                    return styles.dark
                case "GREY":
                    return styles.grey
                case "TERMINAL":
                    return styles.terminal
                case "ACID":
                    return styles.acid
                default:
                    return
            }
        }

        return (
            <Draggable
                handle=".handle"
                bounds="body"
                defaultPosition={{ x: xPos, y: yPos }}
                {...dragHandlers}
            >
                <div
                    className={`${styles.modal} ${styles.projectModal} ${
                        styles.cadillacModal
                    } ${cssSwitch(this.props.theme)} ${
                        this.props.isCadillacOpen
                            ? styles.modalVisible
                            : styles.modalHidden
                    }`}
                    style={{
                        zIndex: this.props.zIndex,
                    }}
                    onClick={this.props.onIncZIndex}
                >
                    <div className={`${styles.modalBar} handle`}>
                        <span className={styles.heading}>Cadillac</span>
                        <svg
                            width="12"
                            className={styles.close}
                            onMouseDown={onClickClose}
                            onClick={this.props.onCadillacClose}
                            viewBox="0 0 32.78 32.78"
                        >
                            <rect
                                className={styles.xPath}
                                x="-2.61"
                                y="12.21"
                                width="38"
                                height="8.36"
                                transform="translate(16.39 -6.79) rotate(45)"
                            />
                            <rect
                                className={styles.xPath}
                                x="-2.61"
                                y="12.21"
                                width="38"
                                height="8.36"
                                transform="translate(39.57 16.39) rotate(135)"
                            />
                        </svg>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.cadillacContainer}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 491.63 76.96"
                                width="250"
                            >
                                <path
                                    className={styles.cadillacPath}
                                    d="M62.73,9.16c0,5-11.49,9-11.49,10.71v43c.68-.49,1.46-1.07,2.24-1.75.29-.1,3.6-3.32,5.16-3.32A2.45,2.45,0,0,1,61.08,60a2.16,2.16,0,0,1-.78,1.55C53,68,44.13,74.33,33.8,74.33c-7.6,0-22.21-4.39-24.55-12.86a.39.39,0,0,1-.09-.3.38.38,0,0,1,.09-.29c-.09,0-.09-.29-.09-.58v-.88c0-11-.1-15.49-6.92-17.73C.29,41.59,0,40.91,0,40.23,0,20.94,12.76,1.17,34.29,1.17c1.85,0,7.6-.2,7.6,2.14A2.75,2.75,0,0,1,41,5.16c-6.82,1-13.34,3-17.92,8.28C16.85,21.62,14.42,31.85,14.42,41c0,.29,2.92,2.82,3.89,5.36,1,2.73.59,9.54,2.24,9.54,2.15,0,5.75-5,5.75-8.57V38.48a4,4,0,0,0-1.07-.2c-2.63,0-4.09,2.73-5.84,2.73A2.23,2.23,0,0,1,17,39a2.07,2.07,0,0,1,.39-1.16c2.24-3.41,4.38-7.8,9-7.8,0-12.37.68-11.49,5.75-15.19,2.63-2,5.65-5.17,9.35-5.17,4.09,0,7.79,1.85,11.5,1.85,3,0,5.55-3.7,8.08-3.7A1.7,1.7,0,0,1,62,8,1.4,1.4,0,0,1,62.73,9.16ZM43.64,19.38a35.84,35.84,0,0,1-4.58-.58c-3.11,0-2.14,7.89-2.14,26.2,0,1,.1,1.85.1,2.83A6.93,6.93,0,0,1,36.33,51c-1.94,3.21-8,6.91-8,10,0,2.92,8.76,4.87,11.2,4.87,3.6,0,4.09-2.34,4.09-3.8Z"
                                />
                                <path
                                    className={styles.cadillacPath}
                                    d="M130.82,63.51a2.27,2.27,0,0,1-.29,1.07c-2.05,3.8-3.9,9.84-9.06,9.84-9.25,0-14.61-11.59-18-22.5H86.6c0,5.75,6.82,8.18,6.82,11.11a5.93,5.93,0,0,1-.59,2.33c-1.85,4.68-3.31,9-5,9-1.94,0-4.87-2.63-6.33-3.51a16.5,16.5,0,0,0-8.38-2.44c-4.57,0-3.7,5.46-6.23,5.46-1,0-2-1.17-2-4,0-6.52,1-12.17,10.52-12.17a15.58,15.58,0,0,1,3.71.48c-2.63-3.5-3.8-3-3.8-4S78.42,44.91,80,39.74a3.58,3.58,0,0,0-2.14-.87c-2.63,0-4.09,2.72-5.94,2.72a2.18,2.18,0,0,1-2.34-1.94,2.4,2.4,0,0,1,.39-1.27c2-3.6,4.77-7.89,8.77-7.89A5,5,0,0,1,82.41,32c1.46-5.06,4.38-11.69,4.38-16.56,0-3.7-2.24-6.92-6.33-6.92-.78,0-1.46.39-2.14.39a2.1,2.1,0,0,1-1.85-2.33c0-1.95,2.72-5.26,10.42-5.26,16.66,0,20.55,16.26,24.35,28.44,1.37,4.58,2.63,9.25,4.09,13.83a3.14,3.14,0,0,0,2.34,1.07c2.83,0,4.19-2.92,5.75-2.92A2.48,2.48,0,0,1,126,44c0,2.34-4.28,8-7.6,8.86,1.27,3.61,2.34,8.58,6.82,8.58,1,0,2.24-.68,3.22-.68A1.91,1.91,0,0,1,130.14,62,2.31,2.31,0,0,1,130.82,63.51ZM96,23.77c-1.66,0-5.26,15-7,19.87h11.88C100.24,41.3,97.21,23.77,96,23.77Z"
                                />
                                <path
                                    className={styles.cadillacPath}
                                    d="M194,13.05c0,.1-.1.1-.1.2.2,16.75.1,33.6.1,50.17v.09c0,.88-5,5.94-5.55,6.43-1.37,1.07-4.68,4.48-6.92,4.48a.91.91,0,0,1-.48-.09c-5.85-1.76-11.6-3.12-17.44-4.58-6.43,0-12.08,2-17.73,6.62a2.6,2.6,0,0,1-1.56.59,2.65,2.65,0,0,1-2.63-2.34c0-1.85,9.26-10,15.39-13.74a8.68,8.68,0,0,0,4.09-7v-39c-5.45,0-6.33,10.82-6.33,21.63,0,5,.2,9.93.2,13.73,0,5.36-6.82,10-11,11.79a1.23,1.23,0,0,1-.59.1c-.77,0-1.46-1-1.46-1.85V39.06a2.81,2.81,0,0,0-1.94-.68c-2.73,0-4.29,2.83-6.14,2.83a2.3,2.3,0,0,1-2.44-2.15c0-3.12,5.65-9.35,9.45-9.35a4.26,4.26,0,0,1,1.07.1v-9c0-2.44,5.85-6.34,7.41-7.51a11.22,11.22,0,0,1,1.17-.87,17.19,17.19,0,0,1-6.43-5.65c-.1-.1-2-2.92-2-4.09A2.61,2.61,0,0,1,144.56,0a2,2,0,0,1,1.55.78c2,2.53,5,3,8.09,3,8.38,0,16.76-2.53,24.74-2.53.2,0,1.56,0,1.85.29,4.39,3.8,8.77,7.6,13.15,11.3C193.94,13,194,13,194,13.05Zm-15,3.7c-1.66-1.46-3.31-2.92-5-4.28-1.65.19-3.21.49-4.87.68V37.21c2.63-2.63,6.43-3.6,9.84-6.43Zm0,20.46c-2.83,2.34-7.11,3.61-9.84,6.24V57.28A38.63,38.63,0,0,1,179,58.74Z"
                                />
                                <path
                                    className={styles.cadillacPath}
                                    d="M224.14,57.08a10.79,10.79,0,0,0,2.63,6.14,1.25,1.25,0,0,1,.39,1,3.48,3.48,0,0,1-.29,1.27c-1.76,4.68-3.22,8.87-5,8.87-2,0-4.87-2.54-6.33-3.51a15.47,15.47,0,0,0-8.09-2.44c-5.06,0-3.8,5.46-6.62,5.46-1.27,0-2-2.14-2-3.9,0-6.62.88-12.27,10.72-12.27V39a5.29,5.29,0,0,0-1.17-.19c-2.73,0-4.19,2.82-6,2.82a2.25,2.25,0,0,1-2.34-2,2.4,2.4,0,0,1,.39-1.27c2.14-3.89,5-8,9.16-8,0-1.85.19-4.67.19-7.69,0-5.36-.78-11.11-5.16-11.11-2.54,0-3.51,3.41-5.75,3.41-1.17,0-2.24-.68-2.24-1.75,0-3.9,6.72-8.57,6.62-8.47a13.89,13.89,0,0,1,8.48-3c4,0,7,2.24,11.1,2.24,3.61,0,5.56-2.63,7.11-2.63a2.65,2.65,0,0,1,2.44,2.63,2.35,2.35,0,0,1-.58,1.46c-3.41,4.38-7.41,6.33-7.7,13.44Z"
                                />
                                <path
                                    className={styles.cadillacPath}
                                    d="M289.89,68.67c-1.65,1.66-4.58,5.75-8.28,5.75a5.18,5.18,0,0,1-1.65-.29c-7.7-2.53-14.42-6-23.29-6a24.4,24.4,0,0,0-16.56,6.14,2.56,2.56,0,0,1-1.56.58A2.48,2.48,0,0,1,236,72.47c0-1.55,5.36-5.55,6.24-6.13,1.65-1.17,3.21-2.44,5-3.51V38.77a5.49,5.49,0,0,0-1.26-.19c-2.73,0-4.19,2.82-6,2.82a2.36,2.36,0,0,1-2.44-2.14,1.89,1.89,0,0,1,.39-1.17c2.34-3.8,4.87-8.09,9.35-8.09,0-2.53.2-7.79.2-11,0-5.56-.68-10.62-4.68-10.62-4.87,0-4.38,6.13-6.52,6.13a2.48,2.48,0,0,1-2.34-2.72c0-5.36,6.33-10.91,12.76-10.91a15.51,15.51,0,0,1,9.55,3.21,9.77,9.77,0,0,1,6.43-2.92c3.11,0,6.23,2.14,9.44,2.14,3.8,0,6.82-2.34,7.9-2.34a2.55,2.55,0,0,1,2.53,2.34,2.8,2.8,0,0,1-.2.88c0,1.75-11.49,5.75-14.61,5.75-2.73,0-5.55,1.26-5.84,5.84V60.69a37,37,0,0,1,4.77-.29c8.77,0,19.09,4.57,27.18-1.47,2.34-2.33,5.75.78,3.8,2.73C295.44,63.8,291.06,67.51,289.89,68.67Z"
                                />
                                <path
                                    className={styles.cadillacPath}
                                    d="M355.35,68.67c-1.65,1.66-4.58,5.75-8.28,5.75a5.18,5.18,0,0,1-1.65-.29c-7.7-2.53-14.42-6-23.29-6a24.4,24.4,0,0,0-16.56,6.14,2.56,2.56,0,0,1-1.56.58,2.48,2.48,0,0,1-2.53-2.34c0-1.55,5.36-5.55,6.24-6.13,1.65-1.17,3.21-2.44,5-3.51V38.77a5.49,5.49,0,0,0-1.26-.19c-2.73,0-4.19,2.82-6,2.82a2.36,2.36,0,0,1-2.44-2.14,1.89,1.89,0,0,1,.39-1.17c2.34-3.8,4.87-8.09,9.35-8.09,0-2.53.2-7.79.2-11,0-5.56-.68-10.62-4.68-10.62-4.87,0-4.38,6.13-6.52,6.13a2.48,2.48,0,0,1-2.34-2.72c0-5.36,6.33-10.91,12.76-10.91a15.51,15.51,0,0,1,9.55,3.21,9.77,9.77,0,0,1,6.43-2.92c3.11,0,6.23,2.14,9.44,2.14,3.8,0,6.82-2.34,7.9-2.34A2.55,2.55,0,0,1,348,3.31a2.8,2.8,0,0,1-.2.88c0,1.75-11.49,5.75-14.61,5.75-2.73,0-5.55,1.26-5.84,5.84V60.69a37,37,0,0,1,4.77-.29c8.77,0,19.09,4.57,27.18-1.47,2.34-2.33,5.75.78,3.8,2.73C360.9,63.8,356.52,67.51,355.35,68.67Z"
                                />
                                <path
                                    className={styles.cadillacPath}
                                    d="M428.41,63.51a2.27,2.27,0,0,1-.29,1.07c-2.05,3.8-3.9,9.84-9.06,9.84-9.26,0-14.61-11.59-18-22.5H384.19c0,5.75,6.81,8.18,6.81,11.11a6,6,0,0,1-.58,2.33c-1.85,4.68-3.31,9-5,9-1.95,0-4.87-2.63-6.33-3.51a16.5,16.5,0,0,0-8.38-2.44c-4.58,0-3.7,5.46-6.23,5.46-1,0-2.05-1.17-2.05-4,0-6.52,1-12.17,10.52-12.17a15.43,15.43,0,0,1,3.7.48c-2.63-3.5-3.79-3-3.79-4s3.11-9.25,4.67-14.42a3.58,3.58,0,0,0-2.14-.87c-2.63,0-4.09,2.72-5.94,2.72a2.18,2.18,0,0,1-2.34-1.94,2.4,2.4,0,0,1,.39-1.27c2-3.6,4.77-7.89,8.76-7.89A5,5,0,0,1,380,32c1.46-5.06,4.38-11.69,4.38-16.56,0-3.7-2.24-6.92-6.33-6.92-.78,0-1.46.39-2.14.39a2.11,2.11,0,0,1-1.86-2.33c0-1.95,2.73-5.26,10.43-5.26,16.65,0,20.55,16.26,24.35,28.44,1.36,4.58,2.63,9.25,4.09,13.83a3.12,3.12,0,0,0,2.34,1.07c2.82,0,4.19-2.92,5.75-2.92A2.48,2.48,0,0,1,423.54,44c0,2.34-4.29,8-7.6,8.86,1.27,3.61,2.34,8.58,6.82,8.58,1,0,2.24-.68,3.21-.68A1.93,1.93,0,0,1,427.73,62,2.31,2.31,0,0,1,428.41,63.51ZM393.54,23.77c-1.66,0-5.26,15-7,19.87h11.89C397.82,41.3,394.8,23.77,393.54,23.77Z"
                                />
                                <path
                                    className={styles.cadillacPath}
                                    d="M491.63,9.16c0,5-11.5,9-11.5,10.71v43c.69-.49,1.47-1.07,2.25-1.75.29-.1,3.6-3.32,5.16-3.32A2.45,2.45,0,0,1,490,60a2.16,2.16,0,0,1-.78,1.55C481.89,68,473,74.33,462.7,74.33c-7.6,0-22.21-4.39-24.55-12.86a.37.37,0,0,1-.1-.3.36.36,0,0,1,.1-.29c-.1,0-.1-.29-.1-.58v-.88c0-11-.09-15.49-6.91-17.73-1.95-.1-2.24-.78-2.24-1.46,0-19.29,12.76-39.06,34.29-39.06,1.85,0,7.59-.2,7.59,2.14a2.78,2.78,0,0,1-.87,1.85c-6.82,1-13.35,3-17.93,8.28-6.23,8.18-8.67,18.41-8.67,27.57,0,.29,2.93,2.82,3.9,5.36,1,2.73.58,9.54,2.24,9.54,2.14,0,5.75-5,5.75-8.57V38.48a4,4,0,0,0-1.07-.2c-2.63,0-4.1,2.73-5.85,2.73a2.22,2.22,0,0,1-2.43-2,2,2,0,0,1,.39-1.16c2.24-3.41,4.38-7.8,9-7.8,0-12.37.68-11.49,5.74-15.19,2.63-2,5.65-5.17,9.36-5.17,4.09,0,7.79,1.85,11.49,1.85,3,0,5.55-3.7,8.09-3.7a1.7,1.7,0,0,1,1,.2A1.42,1.42,0,0,1,491.63,9.16ZM472.54,19.38A35.84,35.84,0,0,1,468,18.8c-3.12,0-2.14,7.89-2.14,26.2,0,1,.09,1.85.09,2.83a6.92,6.92,0,0,1-.68,3.12c-2,3.21-8,6.91-8,10,0,2.92,8.77,4.87,11.21,4.87,3.6,0,4.09-2.34,4.09-3.8Z"
                                />
                            </svg>
                        </div>
                        <p className={styles.workDesc}>
                            The Cadillac website is built using Three.js and
                            accesses Big Cartel API for e-commerce capabilities.
                        </p>
                        <h4>Tech Stack</h4>
                        <ul className={styles.tech}>
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
        theme: state.theme,
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
