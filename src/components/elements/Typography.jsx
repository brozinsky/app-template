import React from "react";
import classNames from "clsx";

const variants = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subheading1: "h6",
    subheading2: "h6",
    body1: "p",
    body2: "p",
};

const typographySizes = {
    h1: "text-6xl",
    h2: "text-5xl",
    h3: "text-4xl",
    h4: "text-3xl",
    h5: "text-2xl",
    h6: "text-1xl",
    body1: "text-base",
};

const Typography = ({variant, size, children, className, ...props}) => {
    const Component = variant ? variants[variant] : "p";
    const typographySize = size ? typographySizes[size] : typographySizes["p"];

    return (
        <Component className={classNames(typographySize, className)} {...props}>
            {children}
        </Component>
    );
};

export default Typography;
