import GridPage from "@/pages/layout/GridPage";
import WithWrapper from "@/components/HOC/WithWrapper";

function GridRoute() {
    return (
        <>
            <GridPage />
        </>
    );
}

export default WithWrapper(GridRoute);
