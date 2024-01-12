// mui
import { Tooltip } from "@mui/material";
import { Box } from "@mui/material";

// react
import { FC } from "react";

interface SocialMediaIconProps {
  imgSrc: string;
  title: string;
  url: string;
}



const SocialMediaIcon: FC<SocialMediaIconProps> = ({ imgSrc, title, url }) => {
  const handleClick = () => {
    window.open(url, '_blank'); 
  };

  return (
    <Tooltip title={title} placement="bottom" arrow>
      <Box
        onClick={handleClick}
        className="flex items-center justify-center h-12 w-12 rounded-full bg-icons cursor-pointer
        hover:bg-secondary transition-all ease-linear duration-300"
      >
        <img src={imgSrc} alt="" width="24px" />
      </Box>
    </Tooltip>
  );
};

export default SocialMediaIcon;
