import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
// import "./contact.css";
import Heading from "../shared/Heading";

function Login() {
	const [formValid, setFormValid] = useState({
		email: false,
		password: false,
	});
	const [buttonClicked, setButtonClicked] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [responseMessage, setResponseMessage] = useState("");

	const validateEmail = (email) => {
		return /\S+@\S+\.\S+/.test(email);
	}
	const validatePassword = (password) => {
		return password.length > 0;
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));

		switch (name) {
			case 'email':
				setFormValid((prevFormValid) => ({ ...prevFormValid, email: validateEmail(value) }));
				break;
			case 'password':
				setFormValid((prevFormValid) => ({ ...prevFormValid, password: validatePassword(value) }));
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
					email: "",
					password: "",
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
			<Heading>உள்நுழை</Heading>

			<Grid item>
				<Grid item>
					<div className="contact-row">மின்னஞ்சல்</div>
					<div className="contact-icon-div">
						<input
							className="contact-input"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
						></input>
						<span className="contact-icon material-symbols-outlined">
							mail
						</span>
					</div>
					<div className={buttonClicked && !formData.email ? 'inValid-input' : 'valid-input'}>மின்னஞ்சலை சரியாக உள்ளிடவும்</div>
				</Grid>
				<Grid item>
					<div className="contact-row">கடவுச்சொல்</div>
					<div className="contact-icon-div">
						<input
							className="contact-input"
							name="email"
							value={formData.password}
							onChange={handleInputChange}
							type="password"
						></input>
						<span className="contact-icon material-symbols-outlined">
							password
						</span>
					</div>
					<div className={buttonClicked && !formData.email ? 'inValid-input' : 'valid-input'}>கடவுச்சொல்லை சரியாக உள்ளிடவும்</div>
				</Grid>
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
			</Grid>
		</Container>
	);
}
export default Login;
