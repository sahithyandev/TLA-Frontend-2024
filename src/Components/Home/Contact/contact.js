import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import "./contact.css";
import Heading from "../../../shared/Heading";
import { FaEnvelope, FaFacebook, FaYoutube, FaCalendar } from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        category: "",
        phoneNumber: "",
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate form data before submission
        if (!formData.name || !formData.email) {
            alert("Name and email are required fields.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
            alert("Message sent successfully");
            setFormData({
                name: "",
                email: "",
                message: "",
                category: "",
                phoneNumber: "",
            });
        } catch (error) {
            console.log(error);
            alert("Message not sent");
        }
    };

    return (
        <div className="contact-container" id="contact">
            <Container maxWidth="lg" className="contact-container-div" id="contact">
                <Heading>தொடர்புகள்</Heading>

                <Grid container spacing={2} columns={16}>
                    <Grid item xs={12} sm={10}>
                        <Grid container spacing={2} columns={16}>
                            <Grid item xs={8}>
                                <div className="contact-row">பெயர்</div>
                                <div className="contact-icon-div">
                                    <input
                                        className="contact-input"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    ></input>
                                    <span className="contact-icon material-symbols-outlined">
                                        person
                                    </span>
                                </div>
                            </Grid>
                            <Grid item xs={8}>
                                <div className="contact-row">தொலைபேசி எண்</div>
                                <div className="contact-icon-div">
                                    <input
                                        className="contact-input"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                    ></input>
                                    <span className="contact-icon material-symbols-outlined">
                                        phone
                                    </span>
                                </div>
                            </Grid>
                        </Grid>
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
                        </Grid>
                        <Grid item>
                            <div className="contact-row">தொடர்பு வகை</div>
                            <div className="contact-icon-div">
                                <select
                                    className="contact-select contact-icon-div"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled hidden>
                                        {/* ஓர் வகைய தேர்ந்தெடு */}
                                    </option>
                                    <option value="option 1">அனுசரணை</option>
                                    <option value="option 2">நலன் விரும்பிகள்</option>
                                    <option value="option 3">மாணவர்கள்</option>
                                </select>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className="contact-row">தகவல்</div>
                            <div className="contact-icon-div">
                                <textarea
                                    className="contact-input message-input"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                        </Grid>
                        <Grid
                            container
                            item
                            justifyContent="flex-end"
                            paddingBottom={2}
                            paddingTop={2}
                        >
                            <button className="contact-send-button" onClick={handleSubmit}>
                                அனுப்பு
                            </button>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div className="col-right">
                            <Grid item>
                                <div
                                    className="nav-text"
                                    style={{ display: "flex", marginRight: "10px" }}
                                >
                                    <FaEnvelope />
                                    <div style={{ marginLeft: "10px" }}>மின்னஞ்சல்</div>
                                </div>
                                <a className="nav-link" href="mailto:thamizhiyam@gmail.com">
                                    thamizhiyam@gmail.com
                                </a>
                            </Grid>
                            <Grid item>
                                <div
                                    className="nav-text"
                                    style={{ display: "flex", marginRight: "10px" }}
                                >
                                    <FaFacebook />{" "}
                                    <div style={{ marginLeft: "10px" }}>முகப்புத்தகம்</div>
                                </div>
                                <a
                                    className="nav-link"
                                    href="https://web.facebook.com/TLAuom"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://web.facebook.com/TLAuom
                                </a>
                            </Grid>
                            <Grid item>
                                <div
                                    className="nav-text"
                                    style={{ display: "flex", marginRight: "10px" }}
                                >
                                    <FaYoutube /> <div style={{ marginLeft: "10px" }}>வலைஒளி</div>
                                </div>
                                <a
                                    className="nav-link"
                                    href="https://www.youtube.com/@TLAUOM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://www.youtube.com/@TLAUOM
                                </a>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
export default Contact;
