import React from "react";

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: string;
    // onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({children, ...props} : Button) => {
    return (
        <button {...props}>{children}</button>
    )
}

export default Button