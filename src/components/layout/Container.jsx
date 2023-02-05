import React from "react";
import classNames from "clsx";
import {containerVariants} from "@/utils/variants";

const Container = ({variant, children, className, ...props}) => {
    const Component = variant ? containerVariants[variant] : "div";

    return (
        <Component className={classNames("container mx-auto", className)} {...props}>
            {children}
        </Component>
    );
};

export default Container;
