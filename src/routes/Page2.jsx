import HomePage from "@/pages/HomePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function Page2() {
    return (
        <>
            <HomePage title={"Page2"} />
        </>
    );
}

export default WithWrapper(Page2);
