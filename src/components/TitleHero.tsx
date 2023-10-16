import React from "react";

interface TitleHero extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: string;
    // onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TitleHero = ({children, ...props} : TitleHero) => {
    return (
        <h1 {...props}>{children}</h1>
    )
}

export default TitleHero