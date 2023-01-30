import HomePage from "@/pages/HomePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function Root() {
    return (
        <>
            <HomePage />
        </>
    );
}

export default WithWrapper(Root);
