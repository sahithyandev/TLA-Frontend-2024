import React from "react";
import {
    Grid, Container
} from '@mui/material'
import './agenda.css'

function Agenda() {
    return (
        <div className="agenda-container-div">
            <Container maxWidth='lg' className="agenda-container" sx={{ pb: 4 }}>
                {/* <Heading>நிகழ்ச்சி நிரல்</Heading> */}

                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={0.001}
                    cols={2}
                >
                    <a data-flickr-embed="true" data-context="true" href="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/425413360_683516067327222_3284843738300333850_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFztpw7h7ywKRlw_aq3CVkuqxhqMBlwsZ6rGGowGXCxng5JbdmhnJGkrsNhbX_MtcLcQIERxTTvldnx9OduIDI6&_nc_ohc=5XH4U5U4bqgAX92-ZKY&_nc_ht=scontent-sin6-2.xx&oh=00_AfAi3ShiAXXrJ8nJXRaQQETqvFS-1n5P_tcLal6oVV7_Eg&oe=65C2B998">
                        <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/425413360_683516067327222_3284843738300333850_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFztpw7h7ywKRlw_aq3CVkuqxhqMBlwsZ6rGGowGXCxng5JbdmhnJGkrsNhbX_MtcLcQIERxTTvldnx9OduIDI6&_nc_ohc=5XH4U5U4bqgAX92-ZKY&_nc_ht=scontent-sin6-2.xx&oh=00_AfAi3ShiAXXrJ8nJXRaQQETqvFS-1n5P_tcLal6oVV7_Eg&oe=65C2B998" width="470" height="795" alt="Screenshot (635) - Copy" ></img></a>
                    <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                </Grid>
            </Container>
        </div>
    );
}

export default Agenda