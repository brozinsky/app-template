import MenuDrawer from "@/modules/navigation/MenuDrawer";
import MenuTopApp from "@/modules/navigation/MenuTopApp";
import {useState} from "react";
import Container from "@/layout/Container";

const WithWrapper =
    (WrappedComponent) =>
    ({...props}) => {
        const [isDrawerOpen, setIsDrawerOpen] = useState(true);
        return (
            <>
                <MenuDrawer isOpen={isDrawerOpen} />
                <MenuTopApp isDrawerOpen={isDrawerOpen} toggleDrawer={setIsDrawerOpen} />
                <Container variant="main" className="flex items-center justify-center h-screen">
                    <WrappedComponent {...props} />
                </Container>
            </>
        );
    };

export default WithWrapper;
