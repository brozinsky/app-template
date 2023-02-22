import ButtonPage from "@/pages/components/ButtonPage";
import WithWrapper from "@/components/HOC/WithWrapper";

function ButtonRoute() {
    return (
        <>
            <ButtonPage />
        </>
    );
}

export default WithWrapper(ButtonRoute);
