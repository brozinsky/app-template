import {Link} from "react-router-dom";

import React from "react";

const ButtonOrLink = ({href, ...props}) => {
    const isLink = typeof href !== "undefined";
    const ButtonOrLink = isLink ? "a" : "button";

    let content = <ButtonOrLink {...props} />;

    if (isLink) {
        return <Link href={href}>{content}</Link>;
    }

    return content;
};

export default ButtonOrLink;
