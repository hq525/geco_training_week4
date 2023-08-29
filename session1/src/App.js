import NavBar from './components/NavBar';
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

const ERROR_MESSAGES = {
  NO_NAME: "Name field should not be empty",
  NO_DOB: "Please select a date",
  NO_EMAIL: "Email field should not be empty",
  NO_CONTACT: "Contact field should not be empty",
  NO_DESCRIPTION: "This field is mandatory",
  NAME_ALPHABETICAL_ONLY: "Name field should only contain alphabets",
  INVALID_EMAIL: "Please enter a valid email address",
  CONTACT_10_DIGITS: "Contact should contain 10 digits",
  CONTACT_DIGITS_ONLY: "Contact should only contain digits"
}

function App() {

  const [name, setName] = useState("");
  const [dob, setDOB] = useState(dayjs(new Date()));
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [nameErrorText, setNameErrorText] = useState("");
  const [dobErrorText, setDOBErrorText] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [contactErrorText, setContactErrorText] = useState("");
  const [descriptionErrorText, setDescriptionErrorText] = useState("");
  const [data, setData] = useState({
    name: "",
    dob: dayjs(new Date()),
    email: "",
    contact: "",
    description: ""
  })

  const handleNameChange = (e) => {
    setNameErrorText("");
    setName(e.target.value);
    if(e.target.value === "") {
      setNameErrorText(ERROR_MESSAGES.NO_NAME);
    } else if(!(e.target.value.match(/^[A-Za-z]+$/))) {
      setNameErrorText(ERROR_MESSAGES.NAME_ALPHABETICAL_ONLY);
    }
  }

  const handleDOBChange = (e) => {
    setDOBErrorText("");
    setDOB(dayjs(e['$d']));
    if(!e['$d']) {
      setDOBErrorText(ERROR_MESSAGES.NO_DOB);
    }
  }

  const handleEmailChange = (e) => {
    setEmailErrorText("");
    setEmail(e.target.value);
    if(e.target.value === "") {
      setEmailErrorText(ERROR_MESSAGES.NO_EMAIL);
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))) {
      setEmailErrorText(ERROR_MESSAGES.INVALID_EMAIL);
    }
  }

  const handleContactChange = (e) => {
    setContactErrorText("");
    setContact(e.target.value);
    if(e.target.value === "") {
      setContactErrorText(ERROR_MESSAGES.NO_CONTACT);
    } else if (!e.target.value.match(/^[0-9]+$/)) {
      setContactErrorText(ERROR_MESSAGES.CONTACT_DIGITS_ONLY);
    } else if (e.target.value.length !== 10) {
      setContactErrorText(ERROR_MESSAGES.CONTACT_10_DIGITS);
    }
  }

  const handleDescriptionChange = (e) => {
    setDescriptionErrorText("");
    setDescription(e.target.value)
    if(e.target.value === "") {
      setDescriptionErrorText(ERROR_MESSAGES.NO_DESCRIPTION);
    }
  }

  const handleSubmit = () => {
    if(name === "") {
      setNameErrorText(ERROR_MESSAGES.NO_NAME);
      return;
    }

    if(dob === "") {
      setDOBErrorText(ERROR_MESSAGES.NO_DOB);
      return;
    }

    if(email === "") {
      setEmailErrorText(ERROR_MESSAGES.NO_EMAIL);
      return;
    }

    if(contact === "") {
      setContactErrorText(ERROR_MESSAGES.NO_CONTACT);
      return;
    }

    if(description === "") {
      setDescriptionErrorText(ERROR_MESSAGES.NO_DESCRIPTION);
      return
    }

    if(nameErrorText === "" && dobErrorText === "" && emailErrorText ===  "" && contactErrorText === "" && descriptionErrorText === "") {
      setData({
        name,
        dob,
        email,
        contact,
        description
      })
    }
  }

  return (
    <div className="App">
      <NavBar />
      <div style={{marginTop: '86px'}} />
      <Form 
        name={name}
        dob={dob}
        email={email}
        contact={contact}
        description={description}
        handleNameChange={handleNameChange}
        handleDOBChange={handleDOBChange}
        handleEmailChange={handleEmailChange}
        handleContactChange={handleContactChange}
        handleDescriptionChange={handleDescriptionChange}
        nameErrorText={nameErrorText}
        dobErrorText={dobErrorText}
        emailErrorText={emailErrorText}
        contactErrorText={contactErrorText}
        descriptionErrorText={descriptionErrorText}
        handleSubmit={handleSubmit}
      />
      <Card style={{ width: "fit-content", borderRadius: "10px", marginLeft: "auto", marginRight: "auto" }} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            User details:
          </Typography>
          <Typography variant="body2">
            {`Name: ${data.name}`}
          </Typography>
          <Typography variant="body2">
            {`Date of birth: ${String(data.dob.date()).padStart(2, '0')}/${String(data.dob.month()).padStart(2, '0')}/${data.dob.year()}`}
          </Typography>
          <Typography variant="body2">
            {`Email: ${data.email}`}
          </Typography>
          <Typography variant="body2">
            {`Contact: ${data.contact}`}
          </Typography>
          <Typography variant="body2">
            {`Description: ${data.description}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
