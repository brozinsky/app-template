import React from "react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Button",
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        icon: {
            type: "boolean",
        },
        variant: {
            options: ["primary", "mono", "danger", "neon", "outlined"],
            control: "radio",
        },
        size: {
            options: ["default", "lg"],
            control: "radio",
        },
        rounded: {
            options: ["default", "none", "full"],
            control: "radio",
        },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    variant: "primary",
    label: "Button",
};

export const SizeLg = Template.bind({});
SizeLg.args = {
    size: "lg",
    label: "Button",
};

export const Rounded = Template.bind({});
Rounded.args = {
    rounded: "none",
    label: "Button",
};
