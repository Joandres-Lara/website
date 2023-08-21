import NextLink from "next/link";
import classes from "./link.module.css";

type LinkProps = Parameters<typeof NextLink>[0]

export default function Link({ href = "", children = null, ...rest } : LinkProps) {
 return (
  <NextLink href={href} {...rest}>
   <a className={classes.link}>
    {children}
   </a>
  </NextLink>
 );
}