import EcommercePage from "@/pages/EcommercePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function EcommerceRoute() {
    return (
        <>
            <EcommercePage />
        </>
    );
}

export default WithWrapper(EcommerceRoute);
