import React from "react";

const SotkanaiData = {
  provinces: [
    {
      name: "வடக்கு மாகாணம்",
      districts: [
        {
          name: "யாழ்ப்பாணம்",
          images: [
            "https://live.staticflickr.com/65535/53617240976_68469df202_k.jpg",
            "https://live.staticflickr.com/65535/52613194496_2d3d39870c_o.png",
            "district1_image10.jpg",
          ],
          schedule: {
            date: "2024-06-10",
            time: "மு.ப 10:00" ,
            venue: "யாழ்ப்பாணம் இந்துக் கல்லூரி",
          },
          winning_schools: {
            "1st_place": "Jaffna Hindu College",
            "2nd_place": "St. John's College",
            "3rd_place": "St. Patrick's College",
          },
          participated_schools :[
            "யாழ்ப்பாணம் இந்துக் கல்லூரி",
            "யாழ்ப்பாணம் மத்திய கல்லூரி",
            "யாழ் சம்பத்தரிசியார் கல்லூரி",
            "யாழ் பரி யோவான் கல்லூரி",
            "வேம்படி மகளிர் கல்லூரி",
            "சுண்டிக்குளி மகளிர் கல்லூரி",
            "யாழ்ப்பாணம் இந்து மகளிர் கல்லூரி",
            "யாழ் திருக்குடும்பக் கன்னியர் மடம்",
            "கொக்குவில் இந்துக் கல்லூரி",
            "யாழ் வைத்தீஸ்வர வித்தியாலயம்",
            "வண்ணார்பண்ணை நாவலர் மகாவித்தியாலயம்",
            "யாழ் கனகரத்தினம் மத்திய மகா வித்தியாலயம்"
        ],
        },
        {
          name: "முல்லைத்தீவு",
          images: [
            "https://live.staticflickr.com/65535/53617448573_9032c6dfbc_z.jpg",
            "district2_image2.jpg",
            "district2_image10.jpg",
          ],
        },
        {
          name: "மன்னார்",
          images: [
            "https://live.staticflickr.com/65535/53616365332_d3dd7738f1_k.jpg",
            "district6_image2.jpg",
            "district6_image10.jpg",
          ],
        },
        {
          name: "கிளிநொச்சி",
          images: [
            "https://live.staticflickr.com/65535/53616365292_4e28e734b4_b.jpg",
            "district7_image2.jpg",
            "district7_image10.jpg",
          ],
        },
        {
          name: "வவுனியா",
          images: [
            "https://live.staticflickr.com/65535/53617448608_e62f14f80f_k.jpg",
            "district8_image2.jpg",
            "district8_image10.jpg",
          ],
        },
      ],
    },
    {
      name: "கிழக்கு மாகாணம்",
      districts: [
        {
          name: "திருகோணமலை",
          images: [
            "https://live.staticflickr.com/65535/53617575489_f8e344cad1_k.jpg",
            "district3_image2.jpg",
            "district3_image10.jpg",
          ],
        },
        {
          name: "மட்டக்களப்பு",
          images: [
            "https://live.staticflickr.com/65535/53617575774_5ba06dd179_k.jpg",
            "district4_image2.jpg",
            "district4_image10.jpg",
          ],
          schedule: {
            date: "2024-05-20",
            time: "11:00 AM",
            venue: "Batticaloa Central College",
          },
          winning_schools: {
            "1st_place": "Jaffna Hindu College",
            "2nd_place": "St. John's College",
            "3rd_place": "St. Patrick's College",
          },
          participated_schools: [
            "Jaffna Hindu College",
            "St. John's College",
            "St. Patrick's College",
            "Union College",
            "Methodist Girls' High School",
          ],
        },
        {
          name: "அம்பாறை",
          images: [
            "https://live.staticflickr.com/65535/53617448848_d3db32ad37_k.jpg",
            "district5_image2.jpg",
            "district5_image10.jpg",
          ],
          schedule: {
            date: "2024-05-10",
            time: "10:00 AM",
            venue: "Jaffna Central College",
          },
          winning_schools: {
            "1st_place": "Jaffna Hindu College",
            "2nd_place": "St. John's College",
            "3rd_place": "St. Patrick's College",
          },
          participated_schools: [
            "Jaffna Hindu College",
            "St. John's College",
            "St. Patrick's College",
            "Union College",
          ],
        },
      ],
    },
    {
      name: "மத்திய மாகாணம்",
      districts: [
        {
          name: "நுவரெலியா",
          images: [
            "https://live.staticflickr.com/65535/53617448573_9032c6dfbc_z.jpg",
            "district10_image2.jpg",
            "district10_image10.jpg",
          ],
          schedule: {
            date: "2024-05-10",
            time: "10:00 AM",
            venue: "Jaffna Central College",
          },
          winning_schools: {
            "1st_place": "Jaffna Hindu College",
            "2nd_place": "St. John's College",
            "3rd_place": "St. Patrick's College",
          },
          participated_schools: [
            "Jaffna Hindu College",
            "St. John's College",
            "St. Patrick's College",
            "Union College",
          ],
        },
        {
          name: "மாத்தளை",
          images: [
            "https://live.staticflickr.com/65535/53616365352_88195df941_k.jpg",
            "district11_image2.jpg",
            "district11_image10.jpg",
          ],
          schedule: {
            date: "2024-05-10",
            time: "10:00 AM",
            venue: "Jaffna Central College",
          },
          winning_schools: {
            "1st_place": "Jaffna Hindu College",
            "2nd_place": "St. John's College",
            "3rd_place": "St. Patrick's College",
          },
          participated_schools: [
            "Jaffna Hindu College",
            "St. John's College",
            "St. Patrick's College",
            "Union College",
          ],
        },
      ],
    },
    {
      name: "மேல் மாகாணம்",
      districts: [
        {
          name: "கொழும்பு",
          images: [
            "https://live.staticflickr.com/65535/53617448823_35e5ed8bec_k.jpg",
            "district12_image2.jpg",
            "district12_image10.jpg",
          ],
          schedule: {
            date: "2024-05-10",
            time: "10:00 AM",
            venue: "Jaffna Central College",
          },
          winning_schools: {
            "1st_place": "Jaffna Hindu College",
            "2nd_place": "St. John's College",
            "3rd_place": "St. Patrick's College",
          },
          participated_schools: [
            "Jaffna Hindu College",
            "St. John's College",
            "St. Patrick's College",
            "Union College",
          ],
        },
        {
          name: "கம்பகா",
          images: [
            "https://live.staticflickr.com/65535/53617448788_aafc37632e_k.jpg",
            "district13_image2.jpg",
            "district13_image10.jpg",
          ],
          schedule: {
            date: "2024-05-10",
            time: "10:00 AM",
            venue: "Jaffna Central College",
          },
          winning_schools: {
            "1st_place": "Jaffna Hindu College",
            "2nd_place": "St. John's College",
            "3rd_place": "St. Patrick's College",
          },
          participated_schools: [
            "Jaffna Hindu College",
            "St. John's College",
            "St. Patrick's College",
            "Union College",
          ],
        },
        {
          name: "களுத்துறை",
          images: [
            "https://live.staticflickr.com/65535/53617575639_ef7bccbbf5_k.jpg",
            "district14_image2.jpg",
            "district14_image10.jpg",
          ],
          schedule: {
            date: "2024-05-10",
            time: "10:00 AM",
            venue: "Jaffna Central College",
          },
          winning_schools: {
            "1st_place": "Jaffna Hindu College",
            "2nd_place": "St. John's College",
            "3rd_place": "St. Patrick's College",
          },
          participated_schools: [
            "Jaffna Hindu College",
            "St. John's College",
            "St. Patrick's College",
            "Union College",
          ],
        },
      ],
    },
  ],
};
export default SotkanaiData;
