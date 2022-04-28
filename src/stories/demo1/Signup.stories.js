import React, { useContext, useState, useEffect } from "react"
import { storiesOf } from "@storybook/react"
import '../../styles/global.scss'

import InputText from '../../components/inputs/text/InputText'
import Button from '../../components/inputs/button/Button'
import Card from '../../components/surface/card/Card'
import CardHeader from '../../components/surface/card/CardHeader'
import CardContent from '../../components/surface/card/CardContent'
import CardFooter from '../../components/surface/card/CardFooter'
import Stepper from '../../components/navigation/stepper/Stepper'
import Step from '../../components/navigation/stepper/Step'
import StepContent from '../../components/navigation/stepper/StepContent'
import StepLabel from '../../components/navigation/stepper/StepLabel'
import Typography from "../../components/typography/Typography"
import StepperContext from '../../components/navigation/stepper/StepperContext'

const stories = storiesOf('Demo 1', module)

stories.add('Signup', () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [withClearance, setWithClearance] = useState(false)
    const [move, setMove] = useState(currentStep)
    const stepperContext = useContext(StepperContext)

    const steps = [
        {
          id: "basic_info_step",
          sequence: 1,
          form: "basicInfoForm",
          label: "Basic Information",
          description: "Let's begin by getting to know you. We will check if we have already met before, and will provide you options if similar details exist. Otherwise, we will save your info for the first time.",
          component: (
            <InputText placeholder="hello" helperMsg={`Enter basic info`} />
          )
        },
        {
          id: "contact_info_step",
          sequence: 2,
          form: "contactInfoForm",
          label: "Contact Information",
          component: (
            <InputText placeholder="hello" helperMsg={`Enter contact info`} />
          )
        },
        {
          id: "account_info_step",
          sequence: 3,
          form: "accountInfoForm",
          label: "Account Information",
          component: (
            <InputText placeholder="hello" helperMsg={`Enter account info`} />
          )
        },
    ]

    useEffect(() => {
        if (withClearance) {
            // const nextStep = currentStep + 1
            // if (nextStep <= steps.length) {
            //     setCurrentStep(nextStep)
            //     setWithClearance(false)
            // }
            setMove(currentStep + 1)
        }
    }, [withClearance])

    return (
        <div style={{ backgroundColor: '#eee' }}>
            <Card>
                <CardHeader>
                    <Typography
                        variant="h3"
                        text="Create Account"
                        color="textDefault"
                    />
                    <Typography
                        variant="caption"
                        align="justify"
                        text="Follow the steps below to create your PGAN account"
                        color="textSecondary"
                    />
                </CardHeader>
                <CardContent>
                    <Stepper
                        steps={steps}
                        // stepperLength={steps.length}
                        // currentStep={currentStep}
                        move={move}
                        getStep={(s) => setCurrentStep(s)}
                    >
                        {steps && steps.length > 0 && steps.map((s, idx) => (
                        <Step key={s.id} stepNum={s.sequence}>
                            {s.component}
                        </Step>
                        ))}
                    </Stepper>
                </CardContent>
                <CardFooter>
                    <div>
                        <Button
                        type="submit"
                        text="Back"
                        size="md"
                        disabled={currentStep===1}
                        onClick={() => {
                            setWithClearance(false)
                            setMove(currentStep - 1)
                        }}
                        />
                        <Button
                        type="submit"
                        text={currentStep === steps.length ? "Complete" : "Next"}
                        size="md"
                        variant="contained"
                        onClick={() => {
                            // setWithClearance(true)
                            setMove(currentStep + 1)
                        }}
                        form={steps[currentStep - 1].form}
                        />
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
})