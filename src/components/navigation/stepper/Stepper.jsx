import React, { useState } from "react"
import styles from "./Stepper.module.scss"
import StepperContext from "./StepperContext"
import { useEffect } from "react"

const Stepper = (props) => {
    const {
        children,
        steps,
        move,
        getStep,
    } = props

    const [step, setStep] = useState(1)

    useEffect(() => {
        if (typeof move !== 'number') {
            throw new Error('Unhandled value for `move`')
        }
        if (steps && move <= steps.length) {
            setStep(move)
        }
    }, [steps, move])

    useEffect(() => {
        getStep(() => step)
    }, [step])

    if (!steps || (steps && steps.length <= 0)) {
        return null
    }

    return (
        <StepperContext.Provider value={{
            step,
        }}>
            <div className={styles.StepperWrapper}>
                {children}
                <span className={styles.StepIndicatorText}>
                    {step} of {steps.length} <br />
                    {steps[step - 1].label}
                </span>
            </div>
        </StepperContext.Provider>
    )
}

export {
    Stepper as default,
    StepperContext
}