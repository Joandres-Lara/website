import NextLink, { LinkProps } from "next/link";
import classes from "./link.module.css";
import { ReactNode } from "react";

export default function Link({ href = "", children = null, ...rest } : LinkProps & {children: ReactNode}) {
 return (
  <NextLink href={href} {...rest}>
   <a className={classes.link}>
    {children}
   </a>
  </NextLink>
 );
}