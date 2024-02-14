import React from "react";
import {Container, Grid, Box} from "@mui/material";
import './pplscore.css';
import firstPlace from "../../../../images/Events/ppl/first.png";
import secondPlace from "../../../../images/Events/ppl/second.png";
import award from "../../../../images/Events/ppl/award.png";

function PplScore() {
    return (
        <>
            <div className='score-landing-container-div'>
                <Container className='score-landing-container'>
                    <div className='score-heading1'> Live Score & Stats </div>
                    <div className='score-text'> https://stumpsapp.com/cric/aQJt </div>
                    <div className='score-heading2'>போட்டி முடிவுகள்</div>
                    <Box className='container'>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} className='text'>
                                                <img src={firstPlace} alt='ppl' className='icon' />
                                            </Grid>
                                            <Grid item xs={6} className='text'>
                                                <div>அணி பெயர்</div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} className='text'>
                                                <img src={award} alt='ppl' className='icon' />
                                            </Grid>
                                            <Grid item xs={6} className='text'>
                                                <div>ஆட்ட நாயகன்</div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <img src={secondPlace} alt='ppl' className='icon' />
                                            </Grid>
                                            <Grid item xs={6} className='text'>
                                                <div>அணி பெயர்</div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
        </>
    )
}

export default PplScore;