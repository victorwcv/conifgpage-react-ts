import React from "react";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/material/styles";

interface CustomButtonProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  sx?: SxProps; 
  disabled?: boolean
}

const CustomButton = ({
  children,
  color ,
  onClick,
  type = "button",
  disabled,
  sx = {},
}: CustomButtonProps) => {
  return (
    <Button
      type={type}
      variant="contained"
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth
      sx={{
        textTransform: "none",
        fontSize: "1.4rem",
        borderRadius: "1.2rem",
        padding: "1rem 3rem",
        fontWeight: "bold",
        ...sx, 
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
