import React from "react";
import {
    Grid, Container
} from '@mui/material'
import './agenda.css'
import Heading from "../../../../shared/Heading";

function Agenda() {
    return (
        <div className="agenda-container-div">
            <Container maxWidth='lg' className="agenda-container" sx={{ pb: 4 }}>
                <Heading>நிகழ்ச்சி நிரல்</Heading>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={0.001}
                    cols={2}
                >
                    <a data-flickr-embed="true" data-context="true" href="https://www.flickr.com/photos/197344750@N07/52611130808/in/dateposted-public/">
                        <img src="https://live.staticflickr.com/65535/52611130808_25e5808b4c_c.jpg" width="470" height="795" alt="Screenshot (635) - Copy" ></img></a>
                    <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                    <a data-flickr-embed="true" data-context="true" href="https://www.flickr.com/photos/197344750@N07/52611130403/in/dateposted-public/">
                        <img src="https://live.staticflickr.com/65535/52611130403_0972d04503_c.jpg" width="463" height="799" alt="agenda"></img></a>
                    <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                </Grid>
            </Container>
        </div>
    );
}

export default Agenda