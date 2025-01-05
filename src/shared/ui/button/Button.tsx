import { ButtonHTMLAttributes, FC } from "react";
import style from "./Button.module.css";

type ColorType = "red" | "green" | "blue";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorType;
}

const colorClassNames: { [key in ColorType]: string } = {
  red: style.Button_Red,
  blue: style.Button_Blue,
  green: style.Button_Green,
};

const Button: FC<ButtonProps> = ({ color, children, ...restProps }) => {
  const colorClassName = color ? colorClassNames[color] : "";

  return (
    <button className={[style.Button, colorClassName].join(" ")} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
