// assets
import contactPageImg from "../assets/contact-page2.svg";
import summoning from "../assets/summon.png";
import ghostThumb from "../assets/ghost-thumb.png"

// components
import { CustomButton, LabelInput, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import { Box, Typography } from "@mui/material";
import { sendEmailDataToFirestore } from "../api/firebase";
import { SetStateAction, useState } from "react";


const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [sendMessageActive, setSendMessageActive] = useState<boolean>(true)

  const handleNameChange = (value:string ) => {
    setName(value);
  };

  const handleEmailChange = (value:string) => {
    setEmail(value);
  };

  const handleMessageChange = (value:string) => {
    setMessage(value);
  };


  const sendEmail=()=>{
    sendEmailDataToFirestore(name,email,message)
    setSendMessageActive(false)
  }

  const allowMessage = ()=>{
    setSendMessageActive(true)
  }

  
  return (
    <Box
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${contactPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
      items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12"
      >
        <Box className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              Summon<span 
              // className="text-secondary"
              style={{color:"red"}}
              > us?</span>
            </h2>
          </Reveal>

          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={summoning}
            alt=""
            className="max-h-[348px]"
            width="400px"
          />
        </Box>

        <motion.div
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex-1 flex flex-col gap-6 w-full max-w-[696px]"
        >
          {sendMessageActive &&(
          <>
          <Box>
            <Typography sx={{color:'lightGray'}}>
              <p>
                 *All field are <b>optional</b>, hitting 'Send Message' will inform us that you like our idea!
              </p>
              <p>
                  Add your email if you would like to be informed when our 'in real life' ghost hunting game goes live.
              </p> 
            </Typography>
          </Box>
          <Box className="flex flex-col sm:flex-row items-center gap-6">
            <LabelInput placeholderText="Name"  labelText="Name" value={name}  onChangeFunc={handleNameChange}/>
            <LabelInput  placeholderText="Email" labelText="Email" value={email} onChangeFunc={handleEmailChange} />
          </Box>

          <Box className="flex flex-col sm:flex-row items-center gap-6">
            <LabelInput
              placeholderText="Message"
              textarea
              labelText="Your message / Feedback" 
              value={message}
              onChangeFunc={handleMessageChange}
            />
          </Box>
          <CustomButton onClick={sendEmail} secondary>Send Message</CustomButton>
          </>
          )}
           {!sendMessageActive &&(
          <>
          <Box className="flex flex-col sm:flex-row items-center gap-6">
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              Thank you for your support, we are excited to start getting demo's out soon!
            </p>
          </Box>
          <Box className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={ghostThumb}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </Box>

          <Box className="flex flex-col sm:flex-row items-center gap-6">
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              Would you like to 
            </p>
            <Box sx={{paddingTop:'2px', marginLeft:'-24px', marginRight:'-24px'}}>
              <CustomButton onClick={allowMessage} secondary>Send Another Message</CustomButton>
            </Box>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              ?
            </p>
          </Box>
         
          </>
          )}

        </motion.div>
      </Box>

      <Box className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </Box>
  );
};

export default Contact;
