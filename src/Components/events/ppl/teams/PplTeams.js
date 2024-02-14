import React from "react";
import {
    Grid, Container, ImageList, ImageListItem
} from '@mui/material';
import './pplteams.css';
import pplteams from '../../../../images/Events/ppl/teams.jpeg'
import Heading from "../../../../shared/Heading";

const pplTeamImages = [
    {
        img: pplteams
    },
    {
        img: pplteams
    },
    {
        img: pplteams
    },
    {
        img: pplteams
    },
    {
        img: pplteams
    },
    {
        img: pplteams
    }
];

function PplTeams() {
    return (
            <div className='ppl-team-container-div'>
                <Container>
                    <Heading>அணி விபரங்கள்</Heading>
                    <Grid container spacing={2}>
                        {pplTeamImages.map((image, index) => (
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={index} className='ppl-team-grid-container'>
                                <img src={image.img} alt={`Image ${index}`} className='ppl-team-images' />
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </div>
    )
}

export default PplTeams;