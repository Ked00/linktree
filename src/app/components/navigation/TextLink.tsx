"use client";
import {Link} from "@mui/material";

type Props = {
  href: string;
  // type: 
  text: string;
};

export default function TextLink(props: Props) {
  return (
    <Link href={`${props.href}`} className="text-white self-center" underline="none">
      {props.text}
    </Link>
  );
}
