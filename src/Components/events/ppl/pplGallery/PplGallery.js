import React from "react";
import {
    Container
} from '@mui/material'
import Heading from "../../../../shared/Heading";
import ImageGallery from "../../../../shared/imageGallery/ImageGallery";
import './pplgallery.css';

const images = [
    {
        img: "",
        thumbnail: '',
    },
]

function PplGallery() {
    return (
        <div className="ppl-gallery-container-div">
            <Container maxWidth='lg' className="ppl-gallery-container">
                <Heading >கலை காட்சி கூடம்</Heading>
                <ImageGallery images={images} />
            </Container>
        </div>
    );
}

export default PplGallery