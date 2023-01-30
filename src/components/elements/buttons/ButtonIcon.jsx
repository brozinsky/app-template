import React from "react";
import {cva} from "class-variance-authority";

const buttonStyles = cva("font-medium text-sm text-center inline-flex items-center", {
    variants: {
        intent: {
            primary: "",
        },
        size: {
            default: "px-3.5 py-3.5",
            lg: "px-8 py-4",
        },
        color: {
            primary: "text-white bg-primary-500 dark:bg-primary-300 hover:bg-primary-500/90 dark:hover:bg-primary-300/90",
            mono: "text-white bg-[#24292F] hover:bg-[#24292F]/90 dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30",
            danger: "text-white bg-red-500 dark:bg-red-400 hover:bg-red-400/90 dark:focus:ring-red-200 dark:hover:bg-red-600",
        },
        rounded: {
            default: "rounded-full",
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

const ButtonIcon = ({icon, size, intent, rounded, color}) => {
    return (
        // <button type="button" className={`${sizeClasses[size]} ${roundedClasses[rounded]} ${colorClasses[color]} ${variantClasses[variant]} font-medium text-sm text-center inline-flex items-center`}>
        <button type="button" className={buttonStyles({intent, size, color, rounded})}>
            {icon}
        </button>
    );
};

export default ButtonIcon;
