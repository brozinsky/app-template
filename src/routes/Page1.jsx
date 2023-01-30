import HomePage from "@/pages/HomePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function Page1() {
    return (
        <>
            <HomePage />
        </>
    );
}

export default WithWrapper(Page1);
