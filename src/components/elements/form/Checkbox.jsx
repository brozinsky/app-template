import React, {useRef} from "react";
import {useToggleState} from "@react-stately/toggle";
import {useCheckbox} from "@react-aria/checkbox";
import {VisuallyHidden} from "@react-aria/visually-hidden";
import {useFocusRing} from "@react-aria/focus";
import {mergeProps} from "@react-aria/utils";
import classNames from "clsx";

const Checkbox = ({animationDraw = false, animationSwipe = true, isDisabled, ...props}) => {
    let state = useToggleState(props);
    let ref = useRef(null);
    let {inputProps} = useCheckbox(props, state, ref);
    let {focusProps, isFocusVisible} = useFocusRing();

    const checkboxClassName = classNames(
        state.isSelected ? "bg-primary-500 group-active:bg-primary-600" : "bg-white",
        "overflow-hidden",
        "text-white",
        "border-2",
        "rounded",
        isDisabled ? "border-gray-300" : isFocusVisible || state.isSelected ? "border-primary-500 group-active:border-primary-600" : "border-gray-500 group-active:border-gray-600",
        "w-5",
        "h-5",
        "flex",
        "flex-shrink-0",
        "justify-center",
        "items-center",
        "mr-2",
        isFocusVisible ? "shadow-outline" : "",
        "transition",
        "ease-in-out",
        "duration-150"
    );

    const svgClassName = classNames("stroke-current w-3 h-3", !state.isSelected ? "translate-y-5" : "translate-y-0", animationSwipe ? "transition ease-in-out duration-150" : "");

    let labelClassName = classNames(isDisabled ? "text-gray-400" : "text-gray-700 group-active:text-gray-800", "select-none");

    return (
        <label className="flex items-center group">
            <VisuallyHidden>
                <input {...mergeProps(inputProps, focusProps)} ref={ref} />
            </VisuallyHidden>
            <div className={checkboxClassName} aria-hidden="true">
                <svg className={svgClassName} viewBox="0 0 18 18">
                    <polyline
                        points="1 9 7 14 15 4"
                        fill="none"
                        strokeWidth={3}
                        strokeDasharray={22}
                        strokeDashoffset={animationDraw ? (state.isSelected ? 44 : 66) : 0}
                        style={{
                            transition: "all 400ms",
                        }}
                    />
                </svg>
            </div>
            <span className={labelClassName}>{props.children}</span>
        </label>
    );
};
export default Checkbox;
