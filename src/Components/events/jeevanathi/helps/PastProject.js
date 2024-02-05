import React,{event} from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import School1 from "../../../../images/Events/jeevanathi/udaweriya-2018/school1.jpg";
import School2 from "../../../../images/Events/jeevanathi/udaweriya-2018/school2.jpg";
import School3 from "../../../../images/Events/jeevanathi/udaweriya-2018/school3.jpg";
import School4 from "../../../../images/Events/jeevanathi/udaweriya-2018/school4.jpg";
import Flood1 from "../../../../images/Events/jeevanathi/flood-2018/flood1.jpg";
import Flood2 from "../../../../images/Events/jeevanathi/flood-2018/flood2.jpg";
import Flood3 from "../../../../images/Events/jeevanathi/flood-2018/flood3.jpg";
import Flood4 from "../../../../images/Events/jeevanathi/flood-2018/flood4.jpg";
import Landslide1 from "../../../../images/Events/jeevanathi/landslide-badulla-2014/landslide1.jpg";
import Landslide2 from "../../../../images/Events/jeevanathi/landslide-badulla-2014/landslide2.jpg";
import Landslide3 from "../../../../images/Events/jeevanathi/landslide-badulla-2014/landslide3.jpg";
import Landslide4 from "../../../../images/Events/jeevanathi/landslide-badulla-2014/landslide4.jpg";




const pastEvents = [
  {
    projectName: "உடவேரிய பாடசாலை திட்டம் - 2018",
    photos: [School1, School2, School3, School4],
    description:
      "ஜீவநதி திட்டத்தின் மூலம் பதுளை மாவட்டத்தில் அமைந்திருக்கும் உடவெறியா கிராமத்தின் பாடசாலை மாணவர்களுக்காக அப்பியாசக் கொப்பிகள், புத்தகப்பை, சப்பாத்து, காலணி உறை போன்றவையும் மற்றும் உடவெறியா பாடசாலை அபிவிருத்திக்குச் சிறிய நிதியுதவியும் வழங்கி வைக்கப்பட்டது.",
  },
  {
    projectName: "வெள்ள நிவாரணத் திட்டம் - 2018",
    photos: [Flood1, Flood2, Flood3, Flood4],
    description:
      "நாட்டின் பல்வேறு மாவட்ட மக்களிடமிருந்து நிவாரண பொருட்கள் எமது மன்றத்தினால் சேகரிக்கப்பட்டு கிளிநொச்சி மற்றும் முல்லைத்தீவில் வெள்ளத்தினால் பாதிக்கப்பட்ட மக்களுக்கு வழங்கப்பட்டது.",
  },

  {
    projectName: "மண்சரிவு நிவாரண திட்டம் - 2014",
    photos: [Landslide1,Landslide2,Landslide3,Landslide4],
    description: "பதுளை மாவட்டத்தில் மண்சரிவினால் பாதிக்கப்பட்ட மக்களுக்கு நிவாரண உதவிகள் எமது தமிழிலக்கிய மன்றத்தினால் வழங்கி வைக்கப்பட்டது.",
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
                      maxWidth: "70%",
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
