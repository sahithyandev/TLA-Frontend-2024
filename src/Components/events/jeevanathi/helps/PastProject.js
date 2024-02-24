import React,{event} from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import School1 from "../../../../images/Events/jeevanathi/schools1.png";
import School2 from "../../../../images/Events/jeevanathi/schools2.png";
import School3 from "../../../../images/Events/jeevanathi/schools3.png";
import School4 from "../../../../images/Events/jeevanathi/schools4.png";
import Flood1 from "../../../../images/Events/jeevanathi/flood1.png";
import Flood2 from "../../../../images/Events/jeevanathi/flood2.png";
import Flood3 from "../../../../images/Events/jeevanathi/flood3.png";
import Flood4 from "../../../../images/Events/jeevanathi/flood4.png";
import Flood5 from "../../../../images/Events/jeevanathi/flood5.png";
import Flood6 from "../../../../images/Events/jeevanathi/flood6.png";



const pastEvents = [
  {
    projectName: "உடவேரிய பாடசாலை திட்டம் - 2018",
    photos: [School1, School2, School3, School4],
    description:
      "தமிழ் இலக்கிய மன்றம், கற்றல் உபகரணங்களுக்கு ஒரு தொகையுடன் மொத்தம் 2,00,000.00 ரூபாய் செலவிட்டது. ஒரு மாணவருக்கு 4000.00 ரூபாய் வீதம், அபிவிருத்திக்காக மேலும் 1,00,000.00 ரூபா கையளிக்கப்பட்டது. பள்ளியின், இந்த திட்டத்திற்கு 3,00,000.00 ரூபாய் செலவிடப்பட்டது.",
  },
  {
    projectName: "வெள்ள நிவாரணத் திட்டம் - 2018",
    photos: [Flood1, Flood2, Flood3, Flood4,Flood5,Flood6],
    description:
      "கிளிநொச்சி மற்றும் முல்லைத்தீவில் வெள்ளத்தால் பாதிக்கப்பட்ட மக்களுக்கு தமிழ் இலக்கிய மன்றத்தினால் உதவிகள் வழங்கப்பட்டன.",
  },
];



function PastProject() {
  const maxVisiblePhotos = 4;

  const [visiblePhotos, setVisiblePhotos] = React.useState(maxVisiblePhotos);
  const showMorePhotos = (event) => {
    setVisiblePhotos(event.photos.length);
  };

  const showLessPhotos = () => {
    setVisiblePhotos(maxVisiblePhotos);
  };

  return (
    <>
      <h1 style={{ fontFamily: "Heading", color: "#022345", textAlign: 'center' }}>
      கடந்த காலங்களில் வழங்கப்பட்ட உதவிகள்
      </h1>
      {pastEvents.map((event, index) => (
        <Card
          key={index}
          style={{
            width: '1200',
            height: '700',
            margin: "16px",
            background: "#e3e7eb",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              style={{
                marginBottom: "18px",
                fontFamily: "Heading",
                color: "#022345",
                textAlign: "center",
              }}
            >
              {event.projectName}
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {event.photos.slice(0, visiblePhotos).map((photo, photoIndex) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={6}
                  key={photoIndex}
                  style={{
                    padding: "2px", 
                    boxSizing: "border-box", 
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={`Project ${event.projectName} - Photo ${photoIndex + 1}`}
                    height="100%"
                    width="100%"
                    image={photo}
                    style={{
                      objectFit: "cover",
                      maxWidth: "90%",
                      margin: "0 auto",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            {event.photos.length > maxVisiblePhotos && (
              <div style={{ textAlign: "center", margin: "8px" }}>
                {visiblePhotos < event.photos.length ? (
                  <>
                    <button
                      onClick={() => showMorePhotos(event)}
                      style={{
                        backgroundColor: "#022345",
                        color: "#ffffff",
                        padding: "8px 16px",
                        borderRadius: "2px",
                        cursor: "pointer",
                        marginRight: "8px",
                        fontFamily: "Heading"
                      }}
                    >
                      மேலும் பார்க்க
                    </button>
                   
                  </>
                ) : (
                  <button
                    onClick={showLessPhotos}
                    style={{
                      backgroundColor: "#022345",
                      color: "#ffffff",
                      padding: "8px 16px",
                      borderRadius: "2px",
                      cursor: "pointer",
                      fontFamily: "Heading"
                    }}
                  >
                    குறைவாக பார்க்க 
                  </button>
                )}
              </div>
            )}
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                textAlign: "center",
                maxWidth: "900px",
                margin: "16px",
                fontFamily: "Heading",
                color: "#022345",
              }}
            >
              {event.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default PastProject;
