import React from "react"
import { storiesOf } from "@storybook/react"
import '../../styles/global.scss'

import {Checkbox} from "../../components/inputs"


const stories = storiesOf('Demo 2', module)

stories.add('Test', () => {
    return (
        <div style={{ backgroundColor: '#eee' }}>
            <Checkbox size="lg"/>       
        </div>
    )
})