import React, { useContext, useState, useEffect } from "react"
import { storiesOf } from "@storybook/react"
import '../../styles/global.scss'
import styles from './Signup.module.scss'
import { useForm, Controller } from "react-hook-form"
import InputMask from '../../components/inputs/text/InputMask'
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

const eligibility = [
    {
        id: 1,
        type: "Career Service Eligibility",
        label: 'Career Service Eligibility 1',
        value: '1',
    },
    {
        id: 2,
        type: "Career Service Eligibility",
        label: 'Career Service Eligibility 2',
        value: '2',
    },
    {
        id: 3,
        type: "Special Eligibility",
        label: 'Barangay Eligibility',
        value: '3',
    },
    {
        id: 4,
        type: "Special Eligibility",
        label: 'TechVoc Eligibility',
        value: '4',
    },
]

const BasicInfoStep = (props) => {
    const {
      setWithClearance,
    } = props;
    const [plateNumber, setPlateNumber] = useState("ABC 1234")
    const [elg, setElg] = useState("Career Service Eligibility 2")
    const { register, handleSubmit, formState: { errors }, watch, setValue, control } = useForm();

    const onSubmit = (data) => {
        setWithClearance(true)

        // updateAccount(firstName, lastName, username, accountImage);
        console.log(data)
    };

    return (
        <div className={styles.BasicInfoStepWrapper}>
            <form id="basicInfoForm" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="mobileNum"
                    rules={{
                        required: { value: true, message: "This field is required" },
                        pattern: {
                            value: /^[\+]?[6]{1}?[3]{1}? [(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                            message: "Invalid mobile number"
                        }
                    }}
                    render={({ field: { onChange } }) => (
                        <InputMask
                            type="text"
                            name="mobileNum"
                            placeholder="+63 (xxx) xxx-xxxx"
                            placeholderChar={"\u2000"}
                            onChange={(e) => onChange(e)}
                            mask={[
                            '+',
                            '6',
                            '3',
                            ' ',
                            '(',
                            /[1-9]/,
                            /\d/,
                            /\d/,
                            ')',
                            ' ',
                            /\d/,
                            /\d/,
                            /\d/,
                            '-',
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            ]}
                            helperMsg="Enter your mobile number"
                            errorMsg={errors && errors.mobileNum && errors.mobileNum.message}
                        />
                    )}
                />
                
                <Controller
                    control={control}
                    name="plateNumber"
                    rules={{
                        required: { value: true, message: "This field is required" }
                    }}
                    render={({field: { onChange }}) => {
                        return(
                            <InputText
                                options={cars}
                                name="plateNumber"
                                value={plateNumber}
                                onChange={(v) => {
                                    setPlateNumber(v.target.value)
                                    onChange(v)
                                }}
                                placeholder="Car Plate Number"
                                errorMsg={errors && errors.plateNumber && errors.plateNumber.message}
                            />
                        )
                    }}
                />
                <Controller
                    control={control}
                    name="carModel"
                    rules={{
                        required: { value: true, message: "This field is required" }
                    }}
                    render={({field: { onChange }}) => {
                        return(
                            <InputSelect
                                group='type'
                                options={eligibility}
                                name="carModel"
                                internalValue={elg}
                                // optionLabel="label"
                                // optionValue="value"
                                onChange={(v) => {
                                    setElg(v.target.value)
                                    onChange(v)
                                }}
                                placeholder="Select Car Model"
                                errorMsg={errors && errors.carModel && errors.carModel.message}
                            />
                        )
                    }}
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
                        form={steps[currentStep - 1].form}
                        />
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
})