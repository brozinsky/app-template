import React from "react";
import {cva} from "class-variance-authority";
import {directionTW, alignItemsTW, justifyContentTW, gapTW, spaceXTW, spaceYTW} from "@/utils/variantsTW";
import {containerVariants} from "@/utils/variants";

const Flex = ({variant, direction, alignItems, justifyContent, gap, spaceX, spaceY, spacing, children, className, ...props}) => {
    const Component = variant ? containerVariants[variant] : "div";
    const classes = cva([className, "flex"], {
        variants: {
            direction: directionTW,
            alignItems: alignItemsTW,
            justifyContent: justifyContentTW,
            gap: gapTW,
            spaceX: spaceXTW,
            spaceY: spaceYTW,
        },
    });
    return (
        <Component className={classes({direction, alignItems, justifyContent, gap, spaceX, spaceY})} {...props}>
            {children}
        </Component>
    );
};

export default Flex;
