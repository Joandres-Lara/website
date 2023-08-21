import NextLink from "next/link";
import classes from "./link.module.css";

export default function Link({ href = "", children = null, ...rest }) {
 return (
  <NextLink href={href} {...rest}>
   <a className={classes.link}>
    {children}
   </a>
  </NextLink>
 );
}