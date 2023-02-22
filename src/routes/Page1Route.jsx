import HomePage from "@/pages/HomePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function Page1Route() {
    return (
        <>
            <HomePage />
        </>
    );
}

export default WithWrapper(Page1Route);
