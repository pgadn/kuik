import React, { useContext, useState, useEffect } from "react"
import { storiesOf } from "@storybook/react"
import '../../styles/global.scss'
import styles from './Signup.module.scss'
import { useForm } from "react-hook-form"
import InputText from '../../components/inputs/text/InputText'
import Button from '../../components/inputs/button/Button'
import Card from '../../components/surface/card/Card'
import CardHeader from '../../components/surface/card/CardHeader'
import CardContent from '../../components/surface/card/CardContent'
import CardFooter from '../../components/surface/card/CardFooter'
import Stepper, { Step, StepContent } from '../../components/navigation/stepper'
import Typography from "../../components/data_display/typography/Typography"
import InputSelect from '../../components/inputs/select/InputSelelct'

const stories = storiesOf('Demo 1', module)

const sex = [
    {
        id: 1,
        label: 'Male',
        value: 'Male',
    },
    {
        id: 2,
        label: 'Female',
        value: 'Female',
    },
]

const cars = [
    {
        id: 1,
        make: "Ford",
        label: 'Ranger',
        value: 'Ranger',
    },
    {
        id: 2,
        make: "Ford",
        label: 'Explorer',
        value: 'Explorer',
    },
    {
        id: 2,
        make: "Toyota",
        label: 'Tacoma',
        value: 'Tacoma',
    },
]

const BasicInfoStep = (props) => {
    const {
      setWithClearance,
    } = props;
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = (data) => {
        setWithClearance(true)
        const { firstName } = data;

        // updateAccount(firstName, lastName, username, accountImage);
        console.log(data)
    };

    return (
        <div className={styles.BasicInfoStepWrapper}>
            <form id="basicInfoForm" onSubmit={handleSubmit(onSubmit)}>
                <InputSelect
                    group='make'
                    options={cars}
                    placeholder="Select Model"
                    inputRef={register("carModel", {
                        required: { value: true, message: "This field is required" }
                    })}
                    errorMsg={errors && errors.carModel && errors.carModel.message}
                />
            </form>
        </div>
    )
}

stories.add('Signup', () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [withClearance, setWithClearance] = useState(false)
    const [move, setMove] = useState(currentStep)

    const steps = [
        {
          id: "basic_info_step",
          sequence: 1,
          form: "basicInfoForm",
          label: "Basic Information",
          description: "Let's begin by getting to know you. We will check if we have already met before, and will provide you options if similar details exist. Otherwise, we will save your info for the first time.",
          component: (
              <BasicInfoStep
                setWithClearance={(b) => setWithClearance(b)}
              />
          )
        },
        {
          id: "contact_info_step",
          sequence: 2,
          form: "contactInfoForm",
          label: "Contact Information",
          component: (
            <>
              <InputText placeholder="Input 1" />
              <InputText placeholder="Input 2" />
            </>
          )
        },
        {
          id: "account_info_step",
          sequence: 3,
          form: "accountInfoForm",
          label: "Account Information",
          component: (
            <>
              <InputText placeholder="Input 1" />
              <InputText placeholder="Input 2" />
            </>
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
            setWithClearance(false)
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
                            <StepContent>
                                {s.component}
                            </StepContent>
                        </Step>
                        ))}
                    </Stepper>
                </CardContent>
                <CardFooter>
                    <div className={styles.SignupActionsWrapper}>
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
                        // onClick={() => {
                        //     // setWithClearance(true)
                        //     setMove(currentStep + 1)
                        // }}
                        form={steps[currentStep - 1].form}
                        />
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
})