import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../../styles/global.scss";

import { Checkbox, Option, Datetimepicker } from "../../components/inputs";
import { Progress } from "../../components/feedback";
import { Dialog, DialogTitle, DialogContent, DialogAction } from "../../components/feedback";

// import Button from "../../inputs/button/Button"
import { Button } from "../../components/inputs";

const stories = storiesOf("Demo 2", module);

stories.add("Test", () => {
  const [testDate, setTestDate] = useState(new Date());
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
      setOpenDialog(false);
  }

  const handleOpenDialog = () => {
      setOpenDialog(true);
  }

  const handleChangeTestDate = (e) => {
    // console.log(e)
  };

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Checkbox
        size="lg"
        name="bikedis"
        label="I have a bike disable"
        value="bikedis"
        disabled
      />
      <Checkbox
        size="sm"
        name="bikesm"
        label="I have a bike sm"
        value="bikesm"
      />
      <Checkbox
        size="md"
        name="bikemd"
        label="I have a bike md"
        value="bikemd"
      />

      <Checkbox size="lg" name="testlg" label="test lg" value="testlg1" />

      <Option size="lg" name="test" label="HTML" value="HTML" disabled />
      <Option size="sm" name="test" label="CSS" value="CSS" />
      <Option size="md" name="test" label="Javascript" value="Javascript" />
      <Option size="lg" name="test" label="CSS 3" value="CSS 3" />
      <Progress color="primary" size="sm" />
      <Progress color="secondary" size="md" />
      <Progress color="tertiary" size="lg" />

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          Profile
        </DialogTitle>
        <DialogContent>
          Profile has been updated successfully.
        </DialogContent>
        <DialogAction>
          <Button
            type="button"            
            text="OK"
            size="sm"
            variant="contained" 
            onClick={handleCloseDialog}
          />
        </DialogAction>
      </Dialog>



      <Button type="button" text="Show Dialog" size="sm" variant="contained" onClick={() => handleOpenDialog()}/>
      <div style={{ width: "50%" }}>
        {/* console.log(formatDate(new Date()));
            console.log(formatDate(new Date(), 'dd-MMM-yyyy')); //OP's request
            console.log(formatDate(new Date(), 'EEEE, MMMM d, yyyy HH:mm:ss.S aaa'));
            console.log(formatDate(new Date(), 'EEE, MMM d, yyyy HH:mm'));
            console.log(formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss.S'));
            console.log(formatDate(new Date(), 'M/dd/yyyy')); */}
        <Datetimepicker name="testpicker" onChange={handleChangeTestDate} />
      </div>
    </div>
  );
});
