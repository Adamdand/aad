// assets
import homePageImg from "../assets/home-page2.svg";
import logoTwo from "../assets/logo2.png";
import bloodyArrowImage from '../assets/bloodyArrow-removebg.png';

// components

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";
import { CSSTransition } from 'react-transition-group';

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";
import { Box, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";

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
        <Box sx={{display:'flex'}}>
        <Box sx={{ display: ['none', 'none', null, null, 'block'], width:'50px', height:'100%', paddingTop:'24%', paddingRight:'4px'}}>
        <img src={bloodyArrowImage} alt="Bloody Arrow" />
        </Box>
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
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
              SUMMON
              <br />
              <Box sx={{display:"flex"}}>
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
              className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
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
          
          <Box sx={{display:'flex', flexdirection:'row', marginTop:'20%', marginLeft:'56px'}}>
            <p
              style={{ opacity: opacity, color:'red', transition: 'opacity 3s ease'}}
                className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-6xl"
              >
              Late 2024
            </p>
          </Box>

        </Box>
        
        <Box sx={{marginRight:'220px'}}>
            <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={logoTwo}
            alt=""
            width="220px"
            height="220px"
            className="max-w-full sm:max-w-[401px]"
          />
        </Box>
      </Box>

      <Box className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </Box>
  );
};

export default Hero;
