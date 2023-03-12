import WithWrapper from "@/components/HOC/WithWrapper";

const FlexPage = () => {
    return (
        <>
            <div className="w-full h-full grid grid-cols-2">FlexPage</div>
        </>
    );
};

export default WithWrapper(FlexPage);
