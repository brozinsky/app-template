import HomePage from "@/pages/HomePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function RootRoute() {
    return (
        <>
            <HomePage />
        </>
    );
}

export default WithWrapper(RootRoute);
