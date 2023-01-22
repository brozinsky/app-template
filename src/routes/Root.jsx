import HomePage from "@/pages/HomePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function Root() {
    return (
        <>
            <HomePage title={"Home"} />
        </>
    );
}

export default WithWrapper(Root);
