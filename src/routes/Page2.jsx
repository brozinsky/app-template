import HomePage from "@/pages/HomePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function Page2() {
    return (
        <>
            <HomePage />
        </>
    );
}

export default WithWrapper(Page2);
