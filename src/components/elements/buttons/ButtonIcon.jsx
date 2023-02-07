import React from "react";
import {cva} from "class-variance-authority";
import ButtonOrLink from "./ButtonOrLink";

const buttonStyles = cva("ease-out duration-200", {
    variants: {
        variant: {
            primary: "font-medium text-sm text-center inline-flex items-center",
            secondary: " absolute top-2.5 right-2.5 inline-flex items-center",
        },
        size: {
            default: "px-3.5 py-3.5",
            lg: "px-8 py-4",
            sm: "p-1.5",
        },
        color: {
            primary: ["text-white bg-primary-500", "hover:bg-primary-500/90", "dark:bg-primary-300 dark:hover:bg-primary-300/90"],
            mono: ["text-white bg-[#24292F]", "hover:bg-[#24292F]/90", "dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"],
            danger: ["text-white bg-red-500", "hover:bg-red-400/90", "dark:bg-red-400 dark:focus:ring-red-200 dark:hover:bg-red-600"],
            gray: ["text-gray-400 bg-transparent", "hover:bg-gray-200 hover:text-gray-900", "dark:hover:bg-gray-600 dark:hover:text-white"],
            transparent: ["text-gray-400 bg-transparent", "hover:text-gray-900", "dark:hover:text-white"],
        },
        rounded: {
            default: "rounded-full",
            lg: "rounded-lg",
            none: "",
        },
    },
    defaultVariants: {
        intent: "primary",
        size: "default",
        color: "primary",
        rounded: "default",
    },
});

const ButtonIcon = ({icon, size, intent, rounded, color, srOnly, ...props}) => {
    return (
        <ButtonOrLink type="button" className={buttonStyles({intent, size, color, rounded})} {...props}>
            {icon}
            {srOnly ? <span className="sr-only">{srOnly}</span> : null}
        </ButtonOrLink>
    );
};

export default ButtonIcon;
