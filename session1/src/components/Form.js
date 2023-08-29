import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { deDE } from '@mui/x-date-pickers/locales';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Button from '@mui/material/Button';
import dayjs from 'dayjs';

const Form = (props) => {

    const {
        name,
        dob,
        email,
        contact,
        description,
        handleNameChange,
        handleDOBChange,
        handleEmailChange,
        handleContactChange,
        handleDescriptionChange,
        nameErrorText,
        dobErrorText,
        emailErrorText,
        contactErrorText,
        descriptionErrorText,
        handleSubmit
    } = props;

    return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "300px",
        margin: "20px auto",
        paddingTop: "20px",
        paddingBottom: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="name"
          label="Name"
          error={nameErrorText !== ""}
          helperText={nameErrorText}
          onChange={handleNameChange}
          value={name}
        />
        <LocalizationProvider
            localeText={deDE.components.MuiLocalizationProvider.defaultProps.localeText}
            dateAdapter={AdapterDayjs}
        >
            <DatePicker 
                id="dob" 
                label="Date of birth"
                slotProps={{
                    textField: {
                        variant: 'outlined',
                        error: dobErrorText !== "",
                        helperText: dobErrorText,
                    },
                }}
                onChange={handleDOBChange}
                value={dayjs(dob)}
                maxDate={dayjs(new Date())}
            />
        </LocalizationProvider>
        <TextField
          id="email"
          label="Email"
          error={emailErrorText !== ""}
          helperText={emailErrorText}
          onChange={handleEmailChange}
          value={email}
        />
        <TextField
          id="contact"
          label="Contact Number"
          error={contactErrorText !== ""}
          helperText={contactErrorText}
          onChange={handleContactChange}
          value={contact}
        />
        <TextField
          id="description"
          label="Tell me about yourself"
          multiline
          rows={4}
          error={descriptionErrorText !== ""}
          helperText={descriptionErrorText}
          onChange={handleDescriptionChange}
          value={description}
        />
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
    );
};

export default Form;