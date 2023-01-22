import HomePage from "@/pages/HomePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function Page1() {
    return (
        <>
            <HomePage title={"Page1"} />
        </>
    );
}

export default WithWrapper(Page1);
