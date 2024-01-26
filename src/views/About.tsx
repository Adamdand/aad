// assets
import aboutPageImg from "../assets/about-me-page2.svg";
import hunters from "../assets/hunters.png";
import instagramIcon from "../assets/instagram-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";
import discordIcon from "../assets/discord-icon.png"
import { Box } from "@mui/material";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <Box
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <Box className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              About <span 
              style={{color:"red"}}
              // className="text-secondary"
              > us</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              A group of friends who love playing scary haunted house games together.
            </p>
            <br/>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              After years, we decided to organize our own in-person real life Haunted House game, where the players have to use their investigation skills to uncover clues about the ghost to determine how he/she was killed before it "kills" them!
            </p>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <SocialMediaIcon imgSrc={discordIcon} title="Discord" url="https://discord.gg/8Gqbh6d4CB"/>
            <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" url="https://www.instagram.com"/>
            <SocialMediaIcon imgSrc={twitterIcon} title="Twitter" url="https://twitter.com/?lang=en"/>
            <SocialMediaIcon imgSrc={youtubeIcon} title="YouTube" url="https://youtu.be/JQcPeQEhRYE"/>
          </motion.div>
        </Box>

        <Box className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={hunters}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </Box>
      </Box>

      <Box className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </Box>
  );
};

export default About;
