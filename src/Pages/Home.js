import React from "react";

import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import backgroundImage from "../assets/BackgroundImage.png";
import logo from "../assets/logo.png";
import campechana from "../assets/campechana.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteIcon from '@mui/icons-material/Favorite';


const array = ["hola", "hola2", "hola3"];

const sales = [
  {
    title: "Campechanas",
    oldPrice: "$297",
    newPrice: "$198",
    image: campechana,
    description: "3 x 2",
  },
  {
    title: "Prueba2",
    oldPrice: "$297",
    newPrice: "$198",
    image: campechana,
    description: "2 x 1",
  },
  {
    title: "Prueba3",
    oldPrice: "$297",
    newPrice: "$198",
    image: campechana,
    description: "2 x 1",
  },
];

function Home() {
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
        zIndex: 0, // Ensure content is above pseudo-element
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
        {array.map((element, index) => {
          return <Button key={index} variant="text">{element}</Button>;
        })}

        <Grid container spacing={2}>
          <Grid item lg={5} md={4} xs={3}></Grid>
          <Grid item lg={2} md={4} xs={6}>
            <Card sx={{ borderRadius: "1rem", backgroundColor: "var(--black)", display: "flex", justifyContent: "center", alignItems: "center" }} elevation={5}>
              <img src={logo} alt="Logo" style={{ width: "80%", height: "auto", padding: "1rem" }} />
            </Card>
          </Grid>
          <Grid item lg={5} md={4} xs={3}></Grid>
        </Grid>

        <br></br>
        <br></br>
        <h2 className="font-semibold" style={{ color: 'var(--white)', paddingLeft: "1rem" }}>Promociones</h2>
        <div style={{ width: "100%", margin: "1 auto", marginTop: "1rem" }}>
          <Slider
            arrows={false}
            dots={true}
            infinite={true}
            speed={800}
            autoplay={true}
            autoplaySpeed={2000}
            slidesToShow={1}
            slidesToScroll={1}

          // responsive={[
          //   {
          //     breakpoint: 1024,
          //     settings: {
          //       slidesToShow: 1,
          //       slidesToScroll: 1,
          //       infinite: true,
          //       dots: true
          //     }
          //   },
          //   {
          //     breakpoint: 600,
          //     settings: {
          //       slidesToShow: 1,
          //       slidesToScroll: 1,
          //       dots: true
          //     }
          //   },
          //   {
          //     breakpoint: 480,
          //     settings: {
          //       slidesToShow: 1,
          //       slidesToScroll: 1,
          //       dots: true
          //     }
          //   }
          // ]}
          >

            {sales.map((sale, index) => (
              <div>
                <Card key={index} sx={{ borderRadius: "1rem", backgroundColor: "var(--black)", position: "relative", maxWidth: "24rem", maxHeight: "12rem", display: "flex", marginX: "1rem" }} elevation={5}>
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
                    <div style={{ position: "absolute", bottom: "0", right: "0", paddingBottom: "1rem", paddingRight: "0.2rem" }}>
                      <FavoriteIcon style={{ color: 'var(--opaque)', fontSize: "3rem" }}></FavoriteIcon>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
            {/* <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190720/gallery/preview/02_o_car.jpg" alt="Car 1" /></div>
            <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190715/gallery/preview/03_r_car.jpg" alt="Car 2" /></div>
            <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190714/gallery/preview/04_g_car.jpg" alt="Car 3" /></div>
            <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190714/gallery/preview/01_b_car.jpg" alt="Car 4" /></div>
            <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190720/gallery/preview/02_o_car.jpg" alt="Car 5" /></div>
            <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190715/gallery/preview/03_r_car.jpg" alt="Car 6" /></div>
            <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190714/gallery/preview/04_g_car.jpg" alt="Car 7" /></div>
            <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190714/gallery/preview/01_b_car.jpg" alt="Car 8" /></div> */}
          </Slider>

          {/* Botón redondeado grande */}



            
          {/* <Grid container spacing={2}>
            <Grid item lg={5} md={4} xs={3}></Grid>
            <Grid item lg={2} md={4} xs={6}>


              <button class="button button">        
              <h2 className="font-semibold" style={{ color: 'var(--white)', paddingLeft: "1rem" }}>Ver Menu</h2>
              </button>

            </Grid>
            <Grid item lg={5} md={4} xs={3}></Grid>
          </Grid> */}





        </div>

      </>
    </Box>
  );
}

export default Home;
