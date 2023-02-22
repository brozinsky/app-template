import LayoutPage from "@/pages/LayoutPage";
import WithWrapper from "@/components/HOC/WithWrapper";

function LayoutRoute() {
    return (
        <>
            <LayoutPage />
        </>
    );
}

export default WithWrapper(LayoutRoute);
