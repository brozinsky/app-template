import React from "react";
import {cva} from "class-variance-authority";
import {typographyVariants} from "@/utils/variants";

const Typography = ({center, variant, decoration, size, children, className = "mb-4", ...props}) => {
    const Component = variant ? typographyVariants[variant] : "p";

    const classes = cva([className, "tracking-wide"], {
        variants: {
            size: {
                h1: "text-6xl font-medium",
                h2: "text-5xl font-medium",
                h3: "text-4xl font-medium",
                h4: "text-3xl font-medium",
                h5: "text-2xl font-medium",
                h6: "text-1xl font-medium",
                body1: "text-base",
            },
            decoration: {
                lineTop: "flex flex-col gap-2 before:h-[2px] before:w-[100px] flex before:bg-primary-500 before:rounded-full",
                lineBot: "flex flex-col gap-2 after:h-[2px] after:w-[100px] flex after:bg-primary-500 after:rounded-full",
                none: "",
            },
            center: {
                true: "text-center items-center",
            },
        },
    });

    return (
        <Component className={classes({size, decoration, center})} {...props}>
            {children}
        </Component>
    );
};

export default Typography;
