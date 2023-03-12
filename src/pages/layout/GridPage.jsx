import WithWrapper from "@/components/HOC/WithWrapper";

const GridPage = () => {
    return (
        <>
            <div className="w-full h-full grid grid-cols-2">GridPage</div>
        </>
    );
};

export default WithWrapper(GridPage);
