// react
import { FC, ReactNode } from "react";
import { Button } from "@mui/material";
import './CustomButton.css';

interface ButtonProps {
  children: ReactNode;
  secondary?: boolean;
  icon?: string;
  onClick?: () => void;
  glow?: boolean;
}

const CustomButton: FC<ButtonProps> = ({ children, secondary, icon, onClick, glow }) => {

    const buttonClassNames =`${secondary ? "bg-secondary" : "bg-accent"} ${
      secondary ? "hover:bg-hoverSecondary" : "hover:bg-hoverPrimary"
    } transition-all ease-linear duration-300 py-2.5 px-8 rounded-full text-white text-base sm:text-lg text-bold relative w-full sm:w-fit ${glow ? "shadow-outline" : ""}`;

    
  return (
    <Button
    onClick={onClick}
    className={buttonClassNames}
    // ... rest of your code
  >
      {icon ? (
        <div className="flex items-center gap-2.5 justify-center">
          <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">
            {children}
          </p>
          <img src={icon} alt="" />
        </div>
      ) : (
        <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">{children}</p>
      )}
  </Button>
  );
};

export default CustomButton;