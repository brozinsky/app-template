import HomePage from "@/pages/HomePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function Page3Route() {
    return (
        <>
            <HomePage />
        </>
    );
}

export default WithWrapper(Page3Route);
