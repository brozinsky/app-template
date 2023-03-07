import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import classNames from "clsx";

const MenuDrawerItem = ({id, url, title, Icon, list, isCollapsed}) => {
    const [isOverButton, setIsOverButton] = useState(false);
    const [isOverList, setIsOverList] = useState(false);
    const [isOpen, setIsOpen] = useState();
    const [isTouchInput, setIsTouchInput] = useState();
    const [hasClicked, setHasClicked] = useState();
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
            buttonRef.current.click();
            setIsOpen(false);
        } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
            buttonRef.current.click();
            setIsOpen(true);
        }
    }, [isOverButton, isOverList]);

    useEffect(() => {
        setIsTouchInput(false);
        setHasClicked(false);
    }, [hasClicked]);

    return (
        <li
            ref={buttonRef}
            onTouchStart={() => {
                setIsTouchInput(true);
            }}
            onMouseEnter={() => {
                setIsOverButton(true);
            }}
            onMouseLeave={() => {
                setIsOverButton(false);
            }}
            onClick={() => {
                setHasClicked(true);
                setIsOpen(!isOpen);
            }}
            onKeyDown={() => {
                setIsOpen(!isOpen);
            }}
        >
            {list && list.length > 0 ? (
                <>
                    <div className="select-none cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-dark-900">
                        <Icon />
                        {!isCollapsed ? <span className="ml-3">{title}</span> : null}
                    </div>
                    {isOpen ? (
                        <div
                            onMouseEnter={() => {
                                setIsOverList(true);
                            }}
                            onMouseLeave={() => {
                                setIsOverList(false);
                            }}
                            className="pt-12 h-full absolute left-[318px] top-0 bg-white w-[200px] dark:bg-dark-900"
                        >
                            {list.map(({id, title, url}) => {
                                return (
                                    <Link key={id} to={url} className="px-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-dark-800">
                                        {title}
                                    </Link>
                                );
                            })}
                        </div>
                    ) : null}
                </>
            ) : (
                <Link to={url} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-dark-900">
                    <Icon />
                    {!isCollapsed ? <span className="ml-3">{title}</span> : null}
                </Link>
            )}
        </li>
    );
};

export default MenuDrawerItem;
