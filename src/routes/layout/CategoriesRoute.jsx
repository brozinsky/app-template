import CategoriesPage from "@/pages/layout/CategoriesPage";
import WithWrapper from "@/components/HOC/WithWrapper";

function CategoriesRoute() {
    return (
        <>
            <CategoriesPage />
        </>
    );
}

export default WithWrapper(CategoriesRoute);
