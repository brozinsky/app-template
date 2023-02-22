import CheckboxPage from "@/pages/components/CheckboxPage";
import WithWrapper from "@/components/HOC/WithWrapper";

function CheckboxRoute() {
    return (
        <>
            <CheckboxPage />
        </>
    );
}

export default WithWrapper(CheckboxRoute);
