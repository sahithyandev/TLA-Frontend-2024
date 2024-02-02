import React from "react";
import { Helmet } from "react-helmet";
import JeevanathiIntro from "../Components/events/jeevanathi/intro/Jeevanathiintro";
import hand from "../images/Events/jeevanathi/people-hands-bringing-money-together-to-donate-to-charity 1.png"
import PastProject from "../Components/events/jeevanathi/helps/PastProject";
import UdaveriyaSchool from "../images/Events/jeevanathi/schools 1.png";
import Flood from "../images/Events/jeevanathi/flood2 1.png";

function Jeevanathi() {
  const pastEvents = [
    {
      projectName: "உடவேரிய பாடசாலை திட்டம் - 2018",
      photos: [UdaveriyaSchool],
      description: "தமிழ் இலக்கிய மன்றம், கற்றல் உபகரணங்களுக்கு ஒரு தொகையுடன் மொத்தம் 2,00,000.00 ரூபாய் செலவிட்டது. ஒரு மாணவருக்கு 4000.00 ரூபாய் வீதம், அபிவிருத்திக்காக மேலும் 1,00,000.00 ரூபா கையளிக்கப்பட்டது. பள்ளியின், இந்த திட்டத்திற்கு 3,00,000.00 ரூபாய் செலவிடப்பட்டது."
    },
    {
      projectName: "வெள்ள நிவாரணத் திட்டம் - 2018",
      photos: [Flood],
      description: "கிளிநொச்சி மற்றும் முல்லைத்தீவில் வெள்ளத்தால் பாதிக்கப்பட்ட மக்களுக்கு தமிழ் இலக்கிய மன்றத்தினால்  உதவிகள் வழங்கப்பட்டன.",
    },

  ];
  return (
    <>
      <Helmet>
        <title>ஜீவநதி | தமிழ் இலக்கிய மன்றம்</title>
        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content="TLA, Tamil Literary Association, jeevanathi"
        />
      </Helmet>
      <JeevanathiIntro/>
      <img src={hand}  style={{
            maxWidth: '100%',
            display: 'block',
            margin: '0 auto',
            objectFit: 'cover',
            zoom: '110%'
          
        }}/>
         <button
          style={{
            position: 'absolute',
            top: '145%',
            left: '20%',
            transform: 'translate(-50%, -50%)',
            padding: '30px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            color: '#022345',
            fontFamily: 'Heading',
            textAlign: 'center',
            fontSize: '30px'
            
          }}
          onClick={() => alert('வங்கி கணக்கு விபரம் \n 0080292080 \n BOC \n Jaffna main branch \n X XXXXX'
          )}
        >
          எம்முடன் இணையுங்கள் 
        </button>
         <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        ><h1>கடந்த காலங்களில் வழங்கப்பட்ட உதவிகள்</h1>
          {pastEvents.map((event, index) => (
            <PastProject key={index} {...event} />
          ))}
        </div>
     
    </>
  );
}

export default Jeevanathi;
