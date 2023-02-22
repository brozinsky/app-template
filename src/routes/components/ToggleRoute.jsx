import TogglePage from "@/pages/components/TogglePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function ToggleRoute() {
    return (
        <>
            <TogglePage />
        </>
    );
}

export default WithWrapper(ToggleRoute);
