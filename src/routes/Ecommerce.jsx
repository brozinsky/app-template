import EcommercePage from "@/pages/EcommercePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function Ecommerce() {
    return (
        <>
            <EcommercePage />
        </>
    );
}

export default WithWrapper(Ecommerce);
