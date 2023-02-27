import Paper from "@/components/elements/Paper";
import Typography from "@/components/elements/Typography";

const CategoryTile = ({title, content, image, info}) => {
    return (
        <div className="category-tile">
            <div className="w-full">
                <div className="category-tile__image">
                    <img width={240} height={190} src={image} alt={content} />
                </div>
                <Paper rounded={"none"} opacity={30} elevation={1} className={"text-slate-100 category-tile__info"}>
                    <Typography variant="h3" size="h6" decoration="none" className={"font-bold"}>
                        {title}
                    </Typography>
                    {info ? (
                        <Typography size="sm" decoration="none" className={"text-slate-300"}>
                            {info}
                        </Typography>
                    ) : null}
                </Paper>
            </div>
        </div>
    );
};

export default CategoryTile;
