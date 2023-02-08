import React from "react";
import classNames from "clsx";
import {containerVariants} from "@/utils/variants";

const Container = ({variant, children, className, noMargin, ...props}) => {
    const Component = variant ? containerVariants[variant] : "div";

    return (
        <Component className={classNames("container", noMargin ? "" : "mx-auto", className)} {...props}>
            {children}
        </Component>
    );
};

export default Container;
