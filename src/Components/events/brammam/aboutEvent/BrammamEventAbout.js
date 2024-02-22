import { useParams } from "react-router-dom";
import ComingSoon from "../../../../shared/comingSoon/ComingSoon";
import { Container, Grid } from "@mui/material";
import EventData from "./BrammamEventData.json"
import BrammamRules from "../rules/BrammamRules";
import Heading from "../../../../shared/Heading";
import "../intro/BrammamIntro.css"

import meerigai1 from "./winners/meerigai/1.jpg"
import meerigai2 from "./winners/meerigai/2.jpg"
import olisuvadu1 from "./winners/olisuvadu/1.jpg"
import olisuvadu2 from "./winners/olisuvadu/2.jpg"
import solalvalar1 from "./winners/solalvalar/1.jpg"
import solalvalar2 from "./winners/solalvalar/2.jpg"
import eluthoviyam1 from "./winners/eluthoviyam/1.jpg"
import eluthoviyam2 from "./winners/eluthoviyam/2.jpg"

const BrammamEventAbout = () => {
    const { event } = useParams();
    const validEvents = ["meerigai", "olisuvadu", "solalvalar", "eluthoviyam"]
    const showWinners = false;

    const winnerImages = [];
    if (event === "meerigai") {
        winnerImages.push(meerigai1, meerigai2)
    } else if (event === "olisuvadu") {
        winnerImages.push(olisuvadu1, olisuvadu2)
    } else if (event === "solalvalar") {
        winnerImages.push(solalvalar1, solalvalar2)
    } else if (event === "eluthoviyam") {
        winnerImages.push(eluthoviyam1, eluthoviyam2)
    }

    const imageStyle = {
        "height": "300px",
        "width": "300px",
        "paddingTop": "30px",
        "filter": "grayscale(100%)",
        "objectFit": "cover"
    }

    if (validEvents.includes(event)) {
        return (
            <div className="pongal-landing-container-div" style={{ "height": "fit-content" }}>
                <Container maxWidth=''>
                    <div className="pongal-landing-heading1">
                        {EventData[event]["name"] + " - 2024"}
                    </div>
                    <div style={{ "marginTop": "60px" }}></div>
                    <BrammamRules eventData={EventData[event]} />
                    <div style={{ "marginTop": "90px" }}></div>
                    {
                        showWinners &&
                        <>
                            <Heading>வெற்றியாளர்கள்</Heading>
                            <Container maxWidth='md' className="event-container" sx={{ pb: 4 }}>
                                <Grid container
                                    spacing={4}
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <div className="brammam-event-card">
                                            <div className="brammam-event-card-top">
                                                <div className="brammam-event-card-title"> 1 ம் இடம்</div>
                                                <div> <img src={winnerImages[0]} alt="" style={imageStyle} /> </div>
                                            </div>
                                            <div className="brammam-event-heading1">வெற்றியாளர் பெயர்</div>
                                        </div>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <div className="brammam-event-card">
                                            <div className="brammam-event-card-top">
                                                <div className="brammam-event-card-title"> 2 ம் இடம்</div>
                                                <div><img src={winnerImages[1]} alt="" style={imageStyle} /></div>
                                            </div>
                                            <div className="brammam-event-heading1">வெற்றியாளர் பெயர்</div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Container>
                        </>
                    }
                    <div style={{ "marginTop": "60px" }}></div>
                </Container>
            </div>
        );
    } else {
        return <ComingSoon />
    }

}

export default BrammamEventAbout;