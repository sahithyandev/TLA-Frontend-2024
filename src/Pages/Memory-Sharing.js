import { Helmet } from "react-helmet";
import { useState } from "react";
import { Container } from "@mui/material";

import MemorySharingIntro from "../Components/memory-sharing/intro";
import MemoryCardItem from "../Components/memory-sharing/card-item";
import Modal from "../Components/Modal";
import Login from "../Components/Login";

export default function MemorySharing() {
	const [showPopup] = useState("login");
	const [sharedItems] = useState([
		{
			title: "சொற்கணை",
			content: '"சொற்கணை" என்பது மாபெரும் விவாதச்சமர்.இலங்கையின் 25 மாவட்டங்களில் தேர்வு செய்யப்பட்ட சிறந்த விவாத அணிகள் சொல் எனும் கணை கொண்டு களமாடும் இறுதிக்கட்ட விவாத சமர் தலைநகரில் பிரதான மண்டபத்தில் பல்லாயிரக்கணக்கானோர் முன்னிலையில் மிகவும் கோலாகலமாக நடைபெறுவதாகும்.',
			sharedBy: {
				name: "Kamal Mohan",
				email: "kumar@gmail.com",
				image: "/images/user-mock-image.png"
			},
			images: [
				"/images/mock-image-1.jpeg",
				"/images/mock-image-2.jpeg",
			]
		},
		{
			title: "சொற்கணை",
			content: '"சொற்கணை" என்பது மாபெரும் விவாதச்சமர்.இலங்கையின் 25 மாவட்டங்களில் தேர்வு செய்யப்பட்ட சிறந்த விவாத அணிகள் சொல் எனும் கணை கொண்டு களமாடும் இறுதிக்கட்ட விவாத சமர் தலைநகரில் பிரதான மண்டபத்தில் பல்லாயிரக்கணக்கானோர் முன்னிலையில் மிகவும் கோலாகலமாக நடைபெறுவதாகும்.',
			sharedBy: {
				name: "Kamal Mohan",
				email: "kumar@gmail.com",
				image: "/images/user-mock-image.png"
			},
			images: [
				"/images/mock-image-1.jpeg",
				"/images/mock-image-2.jpeg",
			]
		}
	]);


	return (
		<>
			{/** @ts-ignore */}
			<Helmet>
				<title>நினைவுகள் மீட்டல் | தமிழ் இலக்கிய மன்றம்</title>
				<meta
					name="description"
					content="தமிழ் இலக்கிய மன்றத்துடனான நினைவுகளை நண்பர்களுடன் பகிர்ந்து கொள்ளுங்கள்"
				/>
				<meta
					name="keywords"
					content="TLA, Tamil Literary Association, Memory Sharing"
				/>
			</Helmet>
			<MemorySharingIntro />
			<Container>
				<h2 style={{
					fontFamily: "Para",
					marginBottom: "0",
					fontWeight: "400",
					fontSize: "36px"
				}}>நினைவுகள்</h2>
				<hr style={{
					marginTop: "0px",
					marginBottom: "20px"
				}} />
				{sharedItems.map(item => {
					return <MemoryCardItem key={item.title} data={item} />
				})}

			</Container>
			<Modal isOpen={showPopup == "login"} onClose={undefined}>
				<Login />
			</Modal>
		</>
	);
}
