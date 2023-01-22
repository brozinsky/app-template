import MenuDrawer from "@/modules/navigation/MenuDrawer";
import MenuTopApp from "@/modules/navigation/MenuTopApp";
import {useState} from "react";

const WithWrapper =
    (WrappedComponent) =>
    ({...props}) => {
        const [isDrawerOpen, setIsDrawerOpen] = useState(true);
        return (
            <>
                <MenuDrawer isOpen={isDrawerOpen} />
                <MenuTopApp isDrawerOpen={isDrawerOpen} toggleDrawer={setIsDrawerOpen} />
                <div className="container flex items-center justify-center h-screen">
                    <WrappedComponent {...props} />
                </div>
            </>
        );
    };

export default WithWrapper;
