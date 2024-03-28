import React from 'react';
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';
import Schedule from "../Components/events/sotkanai/sotkanai-district/schedule/schedule";
import SchoolList from "../Components/events/sotkanai/sotkanai-district/school-list/SchoolList";
import SotkanaiDistrictGallery from "../Components/events/sotkanai/sotkanai-district/sotkanai-district-gallery/SotkanaiDistrictGallery";

const SotkanaiDistrict = () => {
    const location = useLocation();

    const { districtData } = location.state || {};
    console.log(districtData);

    if (!districtData) {
        return <div>Error: District data not found.</div>;
    }
    const { name: districtName, schedule: districtSchedule,participated_schools:participated_schools,images:images } = districtData;


    return (
        <>
            <Helmet>
                <title>சொற்கணை | தமிழ் இலக்கிய மன்றம்</title>
                <meta name="description" content="Your description here" />
                <meta name="keywords" content="Your keywords here" />
            </Helmet>
            <Schedule districtName={districtName} districtSchedule={districtSchedule} />
            <SchoolList participated_schools={participated_schools} />
            <SotkanaiDistrictGallery images={images} />
        </>
    );
}

export default SotkanaiDistrict;
