import React from "react";
import {cva} from "class-variance-authority";
import ButtonOrLink from "./ButtonOrLink";

const buttonStyles = cva("font-medium text-m text-center inline-flex items-center", {
    variants: {
        variant: {
            primary: "text-white bg-primary-500 dark:bg-primary-300 hover:bg-primary-500/90 dark:hover:bg-primary-300/90",
            mono: "text-white bg-[#24292F] hover:bg-[#24292F]/90 dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30",
            danger: "text-white bg-red-500 dark:bg-red-400 hover:bg-red-400/90 dark:focus:ring-red-200 dark:hover:bg-red-600",
            neon: "text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 text-blue-400 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300",
            outlined: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800",
        },
        size: {
            default: "px-5 py-2.5",
            lg: "px-8 py-4",
        },
        rounded: {
            default: "rounded-lg",
            none: "",
            full: "rounded-full",
        },
    },
    defaultVariants: {
        intent: "primary",
        size: "default",
        variant: "primary",
        rounded: "default",
    },
});
const labelStyles = cva(null, {
    variants: {
        marginLeft: {
            true: "ml-2",
        },
        marginRight: {
            true: "mr-2",
        },
        isUppercase: {
            true: "uppercase",
        },
    },
});

const Button = ({isUppercase, startIcon, endIcon, variant, label, size, intent, rounded, color, ...props}) => {
    const marginLeft = startIcon !== undefined;
    const marginRight = endIcon !== undefined;
    return (
        // <button type="button" className={`${sizeClasses[size]} ${roundedClasses[rounded]} ${colorClasses[color]} ${variantClasses[variant]} font-medium text-sm text-center inline-flex items-center`}>
        <ButtonOrLink className={buttonStyles({variant, intent, size, color, rounded})} {...props}>
            {startIcon ? startIcon : null}
            <span className={labelStyles({marginLeft, marginRight, isUppercase})}>{label}</span>
            {endIcon ? endIcon : null}
        </ButtonOrLink>
    );
};

export default Button;
