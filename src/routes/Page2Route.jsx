import HomePage from "@/pages/HomePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function Page2Route() {
    return (
        <>
            <HomePage />
        </>
    );
}

export default WithWrapper(Page2Route);
