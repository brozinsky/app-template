import TypographyPage from "@/pages/layout/TypographyPage";
import WithWrapper from "@/components/HOC/WithWrapper";

function TypographyRoute() {
    return (
        <>
            <TypographyPage />
        </>
    );
}

export default WithWrapper(TypographyRoute);
