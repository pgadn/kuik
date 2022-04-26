import styles from "./Stepper.module.scss"
import { Children, isValidElement, cloneElement } from "react"
import StepperContext from "./StepperContext"

const Stepper = (props) => {
    const {
        children,
        steps,
        stepperLength,
        currentStep,
        handleMovement,
    } = props

    return (
        <StepperContext.Provider value={{
            stepperLength,
            currentStep,
            handleMovement,
        }}>
            <div className={styles.StepperWrapper}>
                {children}
                <span className={styles.StepIndicatorText}>
                    {currentStep} of {stepperLength} <br />
                    {steps[currentStep - 1].label}
                </span>
            </div>
        </StepperContext.Provider>
    )
}

export default Stepper