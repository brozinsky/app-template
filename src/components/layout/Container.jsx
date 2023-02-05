import React from "react";
import classNames from "clsx";

const variants = {
    div: "div",
    section: "section",
    main: "main",
    nav: "nav",
    article: "article",
    footer: "footer",
    header: "header",
};

const Container = ({variant, children, className, ...props}) => {
    const Component = variant ? variants[variant] : "div";

    return (
        <Component className={classNames("container mx-auto", className)} {...props}>
            {children}
        </Component>
    );
};

export default Container;
