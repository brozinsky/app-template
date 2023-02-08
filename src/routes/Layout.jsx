import LayoutPage from "@/pages/LayoutPage";
import WithWrapper from "@/components/HOC/WithWrapper";

function Layout() {
    return (
        <>
            <LayoutPage />
        </>
    );
}

export default WithWrapper(Layout);
