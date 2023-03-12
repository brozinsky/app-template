import CategoryTile from "@/components/elements/CategoryTile";
import WithWrapper from "@/components/HOC/WithWrapper";

const CategoriesPage = () => {
    return (
        <>
            <div className="space-x-4 w-full h-full flex flex-row justify-between max-w-5xl">
                <CategoryTile image={"https://picsum.photos/id/149/240/190?grayscale"} title={"Button"} info={"Lorem ipsum dolor sit amet"} />
                <CategoryTile image={"https://picsum.photos/id/149/240/190?grayscale"} title={"Input"} info={"Lorem ipsum dolor sit amet"} />
                <CategoryTile image={"https://picsum.photos/id/149/240/190?grayscale"} title={"Toggle"} info={"Lorem ipsum dolor sit amet"} />
                <CategoryTile image={"https://picsum.photos/id/149/240/190?grayscale"} title={"Checkbox"} info={"Lorem ipsum dolor sit amet"} />
            </div>
        </>
    );
};

export default WithWrapper(CategoriesPage);
