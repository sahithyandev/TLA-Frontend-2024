import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
// import "./contact.css";
import Heading from "../shared/Heading";
import Input from "./Input";
import SimplifiedButton from "./SimplifiedButton";


const validateEmail = (email) => {
	return /\S+@\S+\.\S+/.test(email);
}
const validateNotEmpty = (str) => {
	return str.length > 0;
}
const validatePhoneNo = (phoneNo) => {
	if (typeof phoneNo !="string" || phoneNo.length < 10) return false;
	// TODO additional valdiation?
	return true;
}

function Signup({ changeModal }) {
	const [formValid, setFormValid] = useState({
		name: false,
		email: false,
		password: false,
		confirmPassword: false,
		phoneNo: false
	});
	const [buttonClicked, setButtonClicked] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassowrd: "",
		phoneNo: ""
	});

	const [responseMessage, setResponseMessage] = useState("");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));

		switch (name) {
			case 'email':
				setFormValid((prevFormValid) => ({ ...prevFormValid, email: validateEmail(value) }));
				break;
			case 'name':
			case 'password':
			case 'confirmPassword':
				setFormValid((prevFormValid) => ({ ...prevFormValid, [name]: validateNotEmpty(value) }));
				break;
			case 'phoneNo':
				setFormValid((prevFormValid) => ({ ...prevFormValid, phoneNo: validatePhoneNo(value) }));
				break;
			default:
			// Handle default case if needed
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setButtonClicked(true);

		console.log("submit" + e.target)

		try {
			console.log(formValid);
			if (formValid.email && formValid.password) {
				const response = await fetch("http://localhost:3001/users", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});
				setResponseMessage("உங்களுடைய தகவல் வெற்றிகரமாக அனுப்பப்பட்டுள்ளது")
				document.getElementsByClassName("response-message")[0].style.color = "green";
				setFormData({
					name: "",
					email: "",
					password: "",
					confirmPassowrd: "",
					phoneNo: ""
				});
				setButtonClicked(false);
			}
		} catch (error) {
			setResponseMessage("உங்களுடைய தகவல் அனுப்பப்படவில்லை")
			document.getElementsByClassName("response-message")[0].style.color = "red";
		}
	};

	return (
		<Container maxWidth="lg">
			<Heading>கணக்கை உருவாக்கு</Heading>

			<Grid>
				<Input
					onChange={handleInputChange}
					value={formData.name}
					name="name"
					label="பெயர்"
					icon="person"
					showValidation={buttonClicked && !formData.name}
					validationMessage="பெயரை சரியாக உள்ளிடவும்"
				/>
				<Input
					onChange={handleInputChange}
					value={formData.phoneNo}
					name="phoneNo"
					label="தொலைபேசி இலக்கம்"
					icon="call"
					showValidation={buttonClicked && !formData.phoneNo}
					validationMessage="தொலைபேசி இலக்கத்தை சரியாக உள்ளிடவும்"
				/>
				<Input
					onChange={handleInputChange}
					value={formData.email}
					name="email"
					label="மின்னஞ்சல்"
					icon="mail"
					showValidation={buttonClicked && !formData.email}
					validationMessage="மின்னஞ்சலை சரியாக உள்ளிடவும்"
				/>
				<Input
					onChange={handleInputChange}
					value={formData.password}
					name="password"
					label="கடவுச்சொல்"
					icon="password"
					showValidation={buttonClicked && !formData.password}
					validationMessage="கடவுச்சொல்லை சரியாக உள்ளிடவும்"
					type="password"
				/>
				<Input
					onChange={handleInputChange}
					value={formData.confirmPassowrd}
					name="confirmPassword"
					label="கடவுச்சொல்"
					icon="password"
					showValidation={buttonClicked && (!formData.confirmPassowrd || (formData.password != formData.confirmPassowrd))}
					validationMessage="கடவுச்சொல்லை மீளவும் சரியாக உள்ளிடவும்"
					type="password"
				/>
				<Grid
					container
					item
					justifyContent="flex-end"
					paddingBottom={2}
					paddingTop={2}
				>
					<button className="contact-send-button" onClick={handleSubmit} >
						அனுப்பு
					</button>
				</Grid>
				<Grid item>
					<div className="response-message">{responseMessage}</div>
				</Grid>
				<Grid container item justifyContent="center">
					<SimplifiedButton onClick={changeModal.bind(null, "login")}>
						உள்நுழை
					</SimplifiedButton>
				</Grid>
			</Grid>
		</Container>
	);
}
export default Signup;
