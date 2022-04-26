import React from "react"
import { storiesOf } from "@storybook/react"
import '../../styles/global.scss'

import InputText from '../../components/inputs/text/InputText'
import Card from '../../components/surface/card/Card'
import CardHeader from '../../components/surface/card/CardHeader'
import CardContent from '../../components/surface/card/CardContent'
import CardFooter from '../../components/surface/card/CardFooter'
import Typography from "../../components/typography/Typography"

const stories = storiesOf('Demo 1', module)

stories.add('Signup', () => {
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
                    <InputText
                        placeholder="First Name"
                    />
                    <InputText
                        placeholder="Middle Name"
                    />
                    <InputText
                        placeholder="Last Name"
                    />
                </CardContent>
            </Card>
        </div>
    )
})