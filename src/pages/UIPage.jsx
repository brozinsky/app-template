import WithWrapper from "@/components/HOC/WithWrapper";
import CategoryTile from "@/components/elements/CategoryTile";
import Typography from "@/components/elements/Typography";

import {ReactComponent as ButtonSvg} from "@/assets/svg/categories/UI/button.svg";
import {ReactComponent as CheckboxSvg} from "@/assets/svg/categories/UI/checkbox.svg";
import {ReactComponent as InputSvg} from "@/assets/svg/categories/UI/input.svg";
import {ReactComponent as FaqSvg} from "@/assets/svg/categories/UI/faq.svg";
import {ReactComponent as ToggleSvg} from "@/assets/svg/categories/UI/toggle.svg";

const categories = [
    {id: 111, Icon: ButtonSvg, title: "Button", info: "Lorem ipsum", href: "/layout/button"},
    {id: 112, Icon: InputSvg, title: "Input", info: "Lorem ipsum", href: "/layout/input"},
    {id: 113, Icon: ToggleSvg, title: "Toggle", info: "Lorem ipsum", href: "/layout/toggle"},
    {id: 114, Icon: CheckboxSvg, title: "Checkbox", info: "Lorem ipsum", href: "/layout/checkbox"},
    {id: 115, Icon: FaqSvg, title: "Faq", info: "Lorem ipsum", href: "/layout/faq"},
];

const UIPage = () => {
    return (
        <>
            <div className="w-full max-w-5xl">
                <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
                    User Interface
                </Typography>
                <div className="space-x-4 w-full h-full flex flex-row justify-between max-w-5xl">
                    {categories.map(({id, Icon, title, info, href}) => {
                        return <CategoryTile stroke={true} key={id} Icon={Icon} title={title} info={info} href={href} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default WithWrapper(UIPage);
