import InputPage from "@/pages/components/InputPage";
import WithWrapper from "@/components/HOC/WithWrapper";

function InputRoute() {
    return (
        <>
            <InputPage />
        </>
    );
}

export default WithWrapper(InputRoute);
