// assets
import homePageImg from "../assets/home-page2.svg";
// import homePageIllustation from "../assets/hero-illustration.svg";
import whiteLogo from "../assets/logo-white-removebg.png";
import bloodyArrowImage from '../assets/bloodyArrow-removebg.png';
import downloadIcon from "../assets/download-btn-icon.svg";

// components
import { CustomButton } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
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
            // className="text-secondary"
           
            style={{ color: 'red',fontWeight:'bold'  }}
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
          {/* <CustomButton secondary>Hire me</CustomButton>
          <CustomButton icon={downloadIcon}>Download CV</CustomButton> */}
          </motion.div>
          </Box>
          </Box>
        </Box>

        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={whiteLogo}
          alt=""
          className="max-w-full sm:max-w-[401px]"
        />
      </Box>

      <Box className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </Box>
  );
};

export default Hero;
