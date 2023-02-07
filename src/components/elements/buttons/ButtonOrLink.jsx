import {Link} from "react-router-dom";

import React from "react";

const ButtonOrLink = ({href, ...props}) => {
    const isLink = typeof href !== "undefined";
    const ButtonOrLink = isLink ? "span" : "button";

    let content = <ButtonOrLink {...props} />;

    if (isLink) {
        return (
            <Link className="w-fit h-fit flex" to={href}>
                {content}
            </Link>
        );
    }

    return content;
};

export default ButtonOrLink;
