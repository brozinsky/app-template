import Paper from "@/components/elements/Paper";
import Typography from "@/components/elements/Typography";
import {Link} from "react-router-dom";

const CategoryTile = ({title, content, image, Icon, info, href}) => {
    return (
        <Link to={href} className="category-tile">
            <div className="w-full">
                <div className={`${Icon ? "category-tile__icon" : "category-tile__image"}`}>
                    {image ? <img width={240} height={190} src={image} alt={content} /> : null}
                    {Icon ? <Icon /> : null}
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
        </Link>
    );
};

export default CategoryTile;
