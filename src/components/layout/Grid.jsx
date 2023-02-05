import React from "react";
import {cva} from "class-variance-authority";
import {gridRowsTW, gridColsTW, directionTW, alignItemsTW, justifyContentTW, gapTW, spaceXTW, spaceYTW} from "@/utils/variantsTW";
import {containerVariants} from "@/utils/variants";

const Grid = ({variant, cols, rows, gap, alignItems, justifyContent, spaceX, spaceY, spacing, children, className, ...props}) => {
    const Component = variant ? containerVariants[variant] : "div";
    const classes = cva([className, "grid"], {
        variants: {
            cols: gridColsTW,
            rows: gridRowsTW,
            alignItems: alignItemsTW,
            justifyContent: justifyContentTW,
            gap: gapTW,
            spaceX: spaceXTW,
            spaceY: spaceYTW,
        },
    });
    return (
        <Component className={classes({alignItems, justifyContent, cols, rows, gap, spaceX, spaceY})} {...props}>
            {children}
        </Component>
    );
};

export default Grid;
