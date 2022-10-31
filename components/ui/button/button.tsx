import type { ReactNode } from "react";
import classes from "./button.module.css";

export interface ButtonProps {
 children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
 return <button className={classes.button}>{children}</button>;
}
