import {Link} from "react-router-dom";
import React from "react";
import ButtonIcon from "@/elements/buttons/ButtonIcon";
import {cva} from "class-variance-authority";
import useToggle from "@/hooks/useToggle";

// import {ReactComponent as EmptySvg} from "@/assets/empty.svg";
import {ReactComponent as DashboardSvg} from "@/assets/dashboard.svg";
import {ReactComponent as EcommerceSvg} from "@/assets/ecommerce.svg";
import {ReactComponent as ComponentsSvg} from "@/assets/components.svg";
import {ReactComponent as LayoutSvg} from "@/assets/layout.svg";
import {ReactComponent as UserSvg} from "@/assets/user.svg";
import {ReactComponent as CollapseSvg} from "@/assets/menu-collapse.svg";
import {ReactComponent as ExpandSvg} from "@/assets/menu-expand.svg";

const navItems = [
    {id: 0, title: "Dashboard", url: "/", Icon: DashboardSvg},
    {
        id: 1,
        title: "UI",
        url: "/ui",
        Icon: ComponentsSvg,
        list: [
            {id: 10, title: "Button", url: "/components/button"},
            {id: 11, title: "Input", url: "/components/input"},
            {id: 12, title: "Toggle", url: "/components/toggle"},
            {id: 13, title: "Checkbox", url: "/components/checkbox"},
        ],
    },
    {id: 2, title: "Layout", url: "/layout", Icon: LayoutSvg},
    {id: 3, title: "E-commerce", url: "/e-commerce", Icon: EcommerceSvg},
    {id: 4, title: "Profile", url: "/profile", Icon: UserSvg},
];

const navClasses = cva(["mt-20 fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80  left-0 top-0", "dark:bg-dark-800", "transition-transform"], {
    variants: {
        isOpen: {
            true: "",
            false: " -translate-x-full",
        },
        isCollapsed: {
            true: "w-20",
            false: "",
        },
    },
    defaultVariants: {
        isOpen: "true",
    },
});

const MenuDrawer = ({isOpen}) => {
    const [isCollapsed, setIsCollapsed] = useToggle(false);
    const [isListVisible, setIsListVisible] = useToggle(false);

    return (
        <>
            <nav className={navClasses({isOpen, isCollapsed})} tabIndex="-1" aria-labelledby="drawer-navigation-label">
                <div className={`flex ${isCollapsed ? "justify-center" : "justify-end"}`}>
                    <ButtonIcon onClick={setIsCollapsed} srOnly={"Close menu"} size={"sm"} rounded={"lg"} color={"transparent"} variant={"secondary"} icon={isCollapsed ? <CollapseSvg /> : <ExpandSvg />} />
                </div>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2">
                        {navItems.map(({id, url, title, Icon, list}) => {
                            return (
                                <li key={id}>
                                    {list && list.length > 0 ? (
                                        <>
                                            <div onClick={setIsListVisible} className="select-none cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <Icon />
                                                {!isCollapsed ? <span className="ml-3">{title}</span> : null}
                                            </div>
                                            {isListVisible ? (
                                                <div>
                                                    {list.map(({title, url}) => {
                                                        return (
                                                            <Link to={url} className="block cursor-pointer pl-10 dark:hover:text-primary-200">
                                                                {title}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            ) : null}
                                        </>
                                    ) : (
                                        <Link to={url} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <Icon />
                                            {!isCollapsed ? <span className="ml-3">{title}</span> : null}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default MenuDrawer;
