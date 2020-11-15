import React from "react";
import { LinkStyled } from "./link.component.style";

interface LinkProps {
    href?: string;
}

export const Link: React.FC<LinkProps> = ({children, href}) => {
    return(
        <LinkStyled target="blank" href={href}>
            {children}
        </LinkStyled>
    )
}