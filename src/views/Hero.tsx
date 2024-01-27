// assets
import homePageImg from "../assets/home-page2.svg";
import logoTwo from "../assets/logo2.png";
import bloodyArrowImage from '../assets/bloodyArrow-removebg.png';

import './Hero.css'

// components

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";
import { CSSTransition } from 'react-transition-group';

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";
import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import CustomButton from "../components/CustomButton";

const Hero = () => {
    const [opacity, setOpacity] = useState(0);
    const boxRef = useRef(null); 
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Box is in view
              setTimeout(() => {
                setOpacity(1);
              }, 1000); // Delay of 1 seconds
            } else {
              // Box is out of view
              setOpacity(0);
            }
          });
        },
        { threshold: 0.1 } // This is the visibility threshold, can be adjusted
      );
  
      const boxElement = document.getElementById('home');
      if (boxElement) {
        observer.observe(boxElement);
      }
  
      return () => {
        if (boxElement) {
          observer.unobserve(boxElement);
        }
      };
    }, []);

  return (
    <Box
      ref={boxRef} 
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      
      <Box
        className="max-w-screen-2xl flex flex-col 
          xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12"
      >
       
        <Box className="w-full xl:w-fit">
        {/* here added column */}
        <Box sx={{display:'flex', flexDirection:{xs:'column', lg:'row'}}}>
        <Box sx={{ display: ['none', 'none', null, null, 'block'], width:'50px', height:'100%', paddingTop:{lg:'72px'}, paddingRight:'4px'}}>
        <img src={bloodyArrowImage} alt="Bloody Arrow" />
        </Box>
        <Box sx={{display:'flex', flexDirection:'column'}}>
          <Box>
            <motion.h1
              variants={fadeIn("down")}
              transition={transition()}
              initial="Typography"
              whileInView="visible"
              viewport={{ once: false }}
              className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl
                font-bolt text-textPrimary uppercase"
            >
              <Box sx={{textAlign:'center'}}>
                SUMMON
              </Box>
             
              <br />
              {/* //here added center */}
              <Box sx={{display:"flex", justifyContent:{sm:'center',xs:'center', lg:'flex-start'}, marginTop:{lg:'-72px', md:'-72px'}}}> 
              <Typography sx={{paddingRight:'4px'}}>
              'It was so 
              </Typography>
              <Typography>
              <span  
            
              style={{ color: 'red',fontWeight:'bolder', fontSize:'18px'   }}
              >
                <Typewriter
                  words={["Scary!'", "Fun!'", "Exciting!'"]}
                  cursor
                  cursorStyle="_"
                  cursorColor="white"
                  typeSpeed={250}
                  deleteSpeed={50}
                  loop
                />
              </span>
              </Typography>
              </Box>
              
            </motion.h1>
            <motion.div
              variants={fadeIn("up")}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="my-12 flex flex-col sm:flex-row items-center lg:gap-6 sm:gap-2 justify-center xl:justify-start"
            >
              <Box sx={{display:'flex', direction:'row'}}>
              <Typography sx={{color:'white', mr:'4px'}}>
                Demos
              </Typography>
              <Typography sx={{color:'white' , textDecoration: 'underline' , mr: '4px' }}>
              coming 
              </Typography>
              <Typography sx={{color:'white', mr: '4px'}}>
                to you
              </Typography>
              <Typography sx={{color:'white',  textDecoration: 'underline' }}>
              soon!
              </Typography>
              </Box>
              <Typography sx={{color:'white'}}>
              Shipped directly to you!
              </Typography>
            </motion.div>
            </Box>
            </Box>
          </Box>
          
          <Box sx={{display: 'flex',
                      flexDirection: 'row', // Corrected the property name
                      justifyContent: 'center', // Centers horizontally in a row
                      marginTop:{sm:'5%', lg:'10%'}}}>
            <p
              style={{ opacity: opacity, color:'red', transition: 'opacity 3s ease'}}
                className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-6xl"
              >
              Late 2024
            </p>
          </Box>

          <Box  sx={{  display: 'flex',
                      flexDirection: 'row', // Corrected the property name
                      justifyContent: 'center', // Centers horizontally in a row
                      marginTop: '5%',
                      height: '100%'}} 
                      >
            <CustomButton glow={true} buttonSize="large" onClick={() => {
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                  console.error('Contact element not found');
                }
                }} >
                  Pre-register Now!
            </CustomButton>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <CustomButton
              onClick={() => window.open('https://youtu.be/JQcPeQEhRYE', '_blank')}
            >
              Watch Trailer
            </CustomButton>
          </Box>


        </Box>
        <Box sx={{marginRight:{xs: '0px', sm:'0px', lg:'220px' },
              width: { xs: '100px', sm: '100px', lg: '220px' },
            }}>
            <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={logoTwo}
            alt=""
            width="100%"
            className="max-w-full sm:max-w-[401px]"
          />
        </Box>
      </Box>

      <Box className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </Box>
  );
};

export default Hero;
