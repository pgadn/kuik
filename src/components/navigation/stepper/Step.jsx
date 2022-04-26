import { useContext } from "react"
import styles from "./Step.module.scss"
import classNames from "classnames"
import StepperContext from "./StepperContext"

const Step = (props) => {
    const {
        children,
        stepNum,
        currentStep
    } = props
    const stepperContext = useContext(StepperContext)

    return (
        <div className={classNames(styles.StepWrapper, stepperContext.currentStep === stepNum ? styles.ActiveStep: "")}>
            {children}
        </div>
    )
}

export default Step