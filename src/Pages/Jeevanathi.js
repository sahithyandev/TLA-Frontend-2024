import React from "react";
import { Helmet } from "react-helmet";
import JeevanathiIntro from "../Components/events/jeevanathi/intro/Jeevanathiintro";
import hand from "../images/Events/jeevanathi/people-hands-bringing-money-together-to-donate-to-charity 1.png";
import PastProject from "../Components/events/jeevanathi/helps/PastProject";

function Jeevanathi() {
  return (
    <>
      <Helmet>
        <title>ஜீவநதி | தமிழ் இலக்கிய மன்றம்</title>
        <meta name="description" content="" />
        <meta name="keywords" content="TLA, Tamil Literary Association, jeevanathi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div style={{ position: 'relative' }}>
      <JeevanathiIntro />
      <div style={{ position: 'relative' }}>
        <img
          src={hand}
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            margin: '0 auto',
            objectFit: 'cover',
            width: '100%'
          }}
        />
        <button
          style={{
            position: 'absolute',
            top: '50%',
            left: '20%',
            transform: 'translate(-50%, -50%)',
            padding: '15px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            color: '#022345',
            fontFamily: 'Heading',
            fontSize: '2vw',
          }}
          onClick={() =>
            alert(
              'வங்கி கணக்கு விபரம் \n 0080292080 \n BOC \n Jaffna main branch \n X XXXXX'
            )
          }
        >
          எம்முடன் இணையுங்கள்
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <PastProject />
      </div>
      </div>
    </>
  );
}

export default Jeevanathi;
