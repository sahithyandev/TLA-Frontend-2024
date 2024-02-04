import React from "react";
import { Card, CardContent, CardMedia, Typography,Grid } from "@mui/material";
import UdaveriyaSchool from "../../../../images/Events/jeevanathi/schools 1.png";
import Flood from "../../../../images/Events/jeevanathi/flood2 1.png";
import Flood1 from "../../../../images/Events/jeevanathi/flood1.png";
import Flood2 from "../../../../images/Events/jeevanathi/flood2.png";
import Flood3 from "../../../../images/Events/jeevanathi/flood3.png";
import Flood4 from "../../../../images/Events/jeevanathi/flood4.png";
import school1 from "../../../../images/Events/jeevanathi/schools1.png";
import school2 from "../../../../images/Events/jeevanathi/schools2.png";
import school3 from "../../../../images/Events/jeevanathi/schools3.png";
import school4 from "../../../../images/Events/jeevanathi/schools4.png";


const pastEvents = [
  {
    projectName: "உடவேரிய பாடசாலை திட்டம் - 2018",
    photos: [school1,school2,school3,school4],
    description: "தமிழ் இலக்கிய மன்றம், கற்றல் உபகரணங்களுக்கு ஒரு தொகையுடன் மொத்தம் 2,00,000.00 ரூபாய் செலவிட்டது. ஒரு மாணவருக்கு 4000.00 ரூபாய் வீதம், அபிவிருத்திக்காக மேலும் 1,00,000.00 ரூபா கையளிக்கப்பட்டது. பள்ளியின், இந்த திட்டத்திற்கு 3,00,000.00 ரூபாய் செலவிடப்பட்டது."
  },
  {
    projectName: "வெள்ள நிவாரணத் திட்டம் - 2018",
    photos: [Flood1,Flood2,Flood3,Flood4],
    description: "கிளிநொச்சி மற்றும் முல்லைத்தீவில் வெள்ளத்தால் பாதிக்கப்பட்ட மக்களுக்கு தமிழ் இலக்கிய மன்றத்தினால்  உதவிகள் வழங்கப்பட்டன."
  },
 
 
];

function PastProject() {
  return (
    <><h1 style={{fontFamily: 'Heading' , color: '#022345'}}>கடந்த காலங்களில் வழங்கப்பட்ட உதவிகள்</h1>
      {pastEvents.map((event, index) => (
       <Card key={index} style={{ width: 1200, height: 700, margin: "16px", background: '#e3e7eb', display: 'flex' }}>
       <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",justifyContent: "space-between", }}>
            <Typography variant="h6" component="div" style={{ marginBottom: "8px", fontFamily: 'Heading' , color: '#022345' }}>
              {event.projectName}
            </Typography>
             <Grid container spacing={0} justifyContent="center">
              {event.photos.map((photo, photoIndex) => (
                 <Grid
                 item
                 xs={12}
                 sm={12}  
                 md={6}
                 lg={6}
                 key={photoIndex}
                 style={{
                   width: `${100/ event.photos.length}`,
                   padding: "2%",
                   
                 }}
               >
                  <CardMedia
                    component="img"
                    alt={`Project ${event.projectName} - Photo ${photoIndex + 1}`}
                    height="auto"
                    width="auto"
                    image={photo}
                    style={{ objectFit: "cover",  maxWidth: "70%", margin: "0 auto" }}
                  />
                </Grid>
              ))}
            </Grid>
            <Typography variant="body2" color="text.secondary"  style={{ textAlign: "center", maxWidth: "900px", margin: "auto",margin: "16px",fontFamily: 'Heading' , color: '#022345' }}>
              {event.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default PastProject;
