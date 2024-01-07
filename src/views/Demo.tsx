// react
import { useState } from "react";
import { Box, Typography } from "@mui/material";
// assets
import projectsPageImg from "../assets/projects-page2.svg";

// components
import { CustomButton, Card, Reveal } from "../components";

// data
import { items } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";


type Category = "ghostTool" | "hunterTool" | "photo";

const Demo = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("hunterTool");

  const filteredProjects = () => {
    if (activeCategory === "photo") {
      return items.filter((item) => item.category === "photo");
    } if (activeCategory === "hunterTool") {
      return items.filter((item) => item.category === "hunterTool");
    }
    else {
      return items.filter((item) => item.category === "ghostTool");
    }
  };

  return (
    <Box
      id="demo"
      className="min-h-screen relative"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <Box className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              Previous <span 
              // className="text-secondary"
              style={{color:'red'}}
              > Hauntings</span>
            </h2>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row"
          >
            <CustomButton
              secondary={activeCategory === "hunterTool" ? true : false}
              onClick={() => setActiveCategory("hunterTool")}
            >
              <Typography sx={{color:'white'}}>
              Hunter Tools
              </Typography>
             
          </CustomButton>
          <CustomButton
              secondary={activeCategory === "ghostTool" ? true : false}
              onClick={() => setActiveCategory("ghostTool")}
            >
              <Typography sx={{color:'white'}}>
              Ghost Tools
              </Typography>
             
          </CustomButton>
          <CustomButton
              secondary={activeCategory === "photo" ? true : false}
              onClick={() => setActiveCategory("photo")}
            >
              <Typography sx={{color:'white'}}>
              Photos
              </Typography>
          </CustomButton>
          </motion.div>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex gap-12 mt-12 flex-wrap justify-center"
          >
        
            {filteredProjects().map((item) => (
              <Card imgSrc={item.img} title={item.title} />
            ))}
           
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Demo;
