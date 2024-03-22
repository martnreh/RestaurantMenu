import React from "react";
import { Button } from 'primereact/button';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom"



import backgroundImage from "../assets/BackgroundImage.png";
import logo from "../assets/logo.png";
import campechana from "../assets/campechana.png";
import pirata from "../assets/pirata.png";
import norteña from "../assets/norteña.png";



const sales = [
  {
    title: "Campechanas",
    oldPrice: "$297",
    newPrice: "$198",
    image: campechana,
    description: "3 x 2",
  },
  {
    title: "Piratas",
    oldPrice: "$200",
    newPrice: "$170",
    image: pirata,
    description: "2 x 1",
  },
  {
    title: "Norteñas",
    oldPrice: "$200",
    newPrice: "$180",
    image: norteña,
    description: "2 x 1",
  },
];

function Home() {

  const navigate = useNavigate();
  const handleMenuClick = () => {
    navigate('/menu');
  };


  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 0,
        '&::before': {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        },
      }}
    >
      <>
        



        <Grid container spacing={2}>
          <Grid item lg={5} md={4} xs={3}></Grid>
          <Grid item lg={2} md={4} xs={6}>
            <Card sx={{ borderRadius: "1rem", backgroundColor: "var(--black)", display: "flex", justifyContent: "center", alignItems: "center" }} elevation={5}>
              <img src={logo} alt="Logo" style={{ width: "80%", height: "auto", padding: "1rem" }} />
            </Card>
          </Grid>
          <Grid item lg={5} md={4} xs={3}></Grid>
        </Grid>


        <h2 className="font-semibold mt-4 pt-4" style={{ color: 'var(--white)', paddingLeft: "1rem" }}>Promociones</h2>
        <div className="w-100 pt-4 pb-6 ">
          <Slider
            arrows={false}
            dots={true}
            infinite={true}
            speed={800}
            autoplay={true}
            autoplaySpeed={2000}
            slidesToShow={1}
            slidesToScroll={1}

            responsive={[
              {
                breakpoint: 1480,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 990,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: true
                }
              },
              {
                breakpoint: 670,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true
                }
              }
            ]}
          >

            {sales.map((sale, index) => (
              <div>
                <Card key={index} sx={{ borderRadius: "1rem", backgroundColor: "var(--black)", position: "relative", maxWidth: "24rem", minHeight: "12rem" ,maxHeight: "12rem", display: "flex", marginX: "1rem" }} elevation={5}>
                  <div style={{ width: "50%", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", }}>
                    <div style={{ height: "100%", flex: 1, backgroundColor: "var(--red)", justifyContent: "center", alignItems: "center", display: "flex", paddingLeft: "1rem", paddingRight: "1rem" }}>
                      <Grid container justifyContent="center" alignItems="center" spacing={0}>
                        <Grid item xs={12}>
                          <h3 className="font-extrabold" style={{ color: 'var(--white)', fontSize: '3rem' }}>{sale.description}</h3>
                        </Grid>
                        <Grid item xs={12}>
                          <h3 className="font-bold" style={{ color: 'var(--black)' }}>{sale.title}</h3>
                        </Grid>
                        <Grid item xs={12}>
                          <h5 className="font-medium" style={{ color: 'var(--black)' }}> De {sale.oldPrice} a</h5>
                        </Grid>
                        <Grid item xs={12}>
                          <h2 className="font-extrabold" style={{ color: 'var(--black)', fontSize: '3rem' }}> {sale.newPrice}</h2>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                  <div style={{ width: "50%", height: "100%", position: "relative" }}>
                    <img src={sale.image} alt={sale.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", bottom: "0", right: "0", paddingBottom: "0.7rem", paddingRight: "0.2rem" }}>
                      <FavoriteIcon style={{ color: 'var(--opaque)', fontSize: "3rem" }}></FavoriteIcon>
                    </div>
                  </div>
                </Card>
              </div>
            ))}

          </Slider>



          <div class="flex justify-content-between flex-wrap flex-column gap-6	">
            <div className="flex flex-wrap justify-content-center pt-6 mt-6">
           
            <Button severity="danger" rounded onClick={handleMenuClick}>
                <h2 className="font-normal" style={{ color: 'var(--white)', margin: "1rem" }}>Ver Menú</h2>
              </Button>
             
            </div>


            <div className="flex flex-wrap justify-content-center gap-8 mb-8">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <Button
                  className="bg-white"
                  severity="primary"
                  rounded
                  text
                  aria-label="Facebook"
                >
                  <i className="pi pi-facebook p-2" style={{ fontSize: "2rem" }}></i>
                </Button>
              </a>
              <a href="https://www.instagram.com/taqueriaorinoco/?hl=es" target="_blank" rel="noreferrer">
                <Button
                  className="bg-white"
                  severity="danger"
                  rounded
                  text
                  aria-label="Instagram"
                >
                  <i className="pi pi-instagram p-2" style={{ fontSize: "2rem" }}></i>
                </Button>
              </a>

              <a href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" target="_blank" rel="noreferrer">

                <Button
                  className="bg-white"
                  severity="success"
                  rounded
                  text
                  aria-label="WhatsApp"
                >
                  <i className="pi pi-whatsapp p-2" style={{ fontSize: "2rem" }}></i>
                </Button>
              </a>

            </div>


          </div>






        </div>

      </>
    </Box>
  );
}

export default Home;
