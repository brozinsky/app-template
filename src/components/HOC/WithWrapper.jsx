import MenuDrawer from "@/modules/navigation/MenuDrawer";
import MenuTopApp from "@/modules/navigation/MenuTopApp";
import {useState} from "react";
import Container from "@/layout/Container";
import Flex from "@/layout/Flex";
import {cva} from "class-variance-authority";

const wrapperClasses = cva(["flex items-center justify-center h-screen transition-all"], {
    variants: {
        isDrawerOpen: {
            true: "ml-96",
            false: "ml-auto",
        },
    },
});

const WithWrapper =
    (WrappedComponent) =>
    ({...props}) => {
        const [isDrawerOpen, setIsDrawerOpen] = useState(true);
        return (
            <>
                <MenuTopApp isDrawerOpen={isDrawerOpen} toggleDrawer={setIsDrawerOpen} />
                <Flex direction={"row"} gap="5" alignItems="center" justifyContent={"center"}>
                    <MenuDrawer isOpen={isDrawerOpen} />
                    {/* <div className="mx-auto"> */}
                    <Container noMargin variant="main" className={wrapperClasses({isDrawerOpen})}>
                        <WrappedComponent isDrawerOpen={isDrawerOpen} {...props} />
                    </Container>
                    {/* </div> */}
                </Flex>
            </>
        );
    };

export default WithWrapper;
