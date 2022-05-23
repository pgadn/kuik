import React from "react"
import { storiesOf } from "@storybook/react"
import '../../styles/global.scss'

import {Checkbox, Option, Datetimepicker} from "../../components/inputs"


const stories = storiesOf('Demo 2', module)

stories.add('Test', () => {
    return (
        <div style={{ backgroundColor: '#eee' }}>            
            <Checkbox size="lg" name="bikedis" label="I have a bike disable" value="bikedis" disabled/>  
            <Checkbox size="sm" name="bikesm" label="I have a bike sm" value="bikesm"/>  
            <Checkbox size="md" name="bikemd" label="I have a bike md" value="bikemd"/>  
            <Checkbox size="lg" name="testlg" label="test lg" value="testlg1"/>            
           
            <input
                id="naa"
                type="checkbox"
                name="naa_id"
                value="naa"           
            />
            <label for="naa_id"> naa</label>

            <Option size="lg" name="test" label="HTML" value="HTML" disabled />
            <Option size="sm" name="test" label="CSS" value="CSS" />
            <Option size="md" name="test" label="Javascript" value="Javascript" />
            <Option size="lg" name="test" label="CSS 3" value="CSS 3" />

            <input
                type="radio"
                id="wala_id"
                name="wala"
                value="wala"        
            />
            <label
                for="wala_id"        
            >
                wala
            </label>

            <Datetimepicker/>
      
        </div>
    )
})