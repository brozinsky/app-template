import WithWrapper from "@/components/HOC/WithWrapper";
import CategoryTile from "@/components/elements/CategoryTile";
import Form from "@/modules/Form";
import Button from "@/elements/buttons/Button";
import ButtonIcon from "@/elements/buttons/ButtonIcon";
// import Dropdown from "@/elements/buttons/Dropdown";
import Select from "@/elements/buttons/Select";
import Checkbox from "@/components/elements/form/Checkbox";
import Slider from "@/components/elements/Slider";
import Glass from "@/elements/Glass";
import Toggle from "@/elements/buttons/Toggle";

import {ReactComponent as UiSvg} from "@/assets/svg/categories/ui.svg";
import {ReactComponent as LayoutSvg} from "@/assets/svg/categories/layout.svg";
import {ReactComponent as EcommerceSvg} from "@/assets/svg/categories/ecommerce.svg";
import {ReactComponent as ProfileSvg} from "@/assets/svg/categories/profile.svg";
import {ReactComponent as AudioSvg} from "@/assets/svg/categories/audio.svg";
import Typography from "@/components/elements/Typography";

const categories = [
    {id: 111, Icon: UiSvg, title: "UI", info: "Lorem ipsum", href: "/ui"},
    {id: 112, Icon: LayoutSvg, title: "Layout", info: "Lorem ipsum", href: "/layout"},
    {id: 112, Icon: LayoutSvg, title: "Layout", info: "Lorem ipsum", href: "/layout"},
    {id: 114, Icon: EcommerceSvg, title: "E-commerce", info: "Lorem ipsum", href: "/profile"},
    {id: 115, Icon: AudioSvg, title: "Audio", info: "Lorem ipsum", href: "/audio"},
];

const HomePage = () => {
    return (
        <div className="w-full max-w-5xl">
            <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
                Dashboard
            </Typography>
            <div className="space-x-4 w-full h-full flex flex-row justify-between max-w-5xl">
                {categories.map(({id, Icon, title, info, href}) => {
                    return <CategoryTile stroke={true} key={id} Icon={Icon} title={title} info={info} href={href} />;
                })}
                {/* <CategoryTile image={"https://picsum.photos/id/149/240/190?grayscale"} title={"Button"} info={"Lorem ipsum dolor sit amet"} />
                <CategoryTile image={"https://picsum.photos/id/149/240/190?grayscale"} title={"Input"} info={"Lorem ipsum dolor sit amet"} />
                <CategoryTile image={"https://picsum.photos/id/149/240/190?grayscale"} title={"Toggle"} info={"Lorem ipsum dolor sit amet"} />
                <CategoryTile image={"https://picsum.photos/id/149/240/190?grayscale"} title={"Checkbox"} info={"Lorem ipsum dolor sit amet"} /> */}
                {/* <div className="col-start-1 col-end-2 relative">
                    <div className="bg-red-500 w-40 h-40 rounded-full absolute -left-10"></div>
                    <div className="bg-lime-500 w-40 h-40 rounded-full absolute -left-10 -bottom-10"></div>
                    <Glass blur={"lg"} opacity={30} elevation={1} className={"p-10 w-[500px] flex flex-col"} stroke>
                        <img className="self-center mb-2" src={EmptyState} alt="" />
                        <Typography variant="h3" size="h4" decoration="lineBot" center className={"font-medium mb-4"}>
                            Lorem ipsum dolor sit.
                        </Typography>
                        <Typography center>
                            Lorem ipsum dolor sit amet <CustomLink to="/">consectetur</CustomLink> adipisicing elit. Debitis doloribus aspernatur laudantium veritatis inventore ducimus cupiditate eum? Repellendus, eius. Eaque amet debitis corporis
                            consequatur ratione tempora culpa! Accusantium, reiciendis quod.
                        </Typography>
                        <div className="flex space-x-4 mx-auto w-fit mt-4">
                            <Button label="Prev" variant="outlined" />
                            <Button label="Next" variant="primary" />
                        </div>
                    </Glass>
                </div> */}
                {/* <div className="m-4">
                    <div className="wrapper rounded-md">
                        <div className="border-item rounded-md"></div>
                        <div className="rounded-md main-element bg-dark-900"></div>
                    </div>
                </div> */}
                {/* <Flex className={"m-4"} direction={"row"} gap="5" alignItems="center" justifyContent={"center"}>
                    <div className="bg-red-300 w-5 h-5" />
                    <div className="bg-lime-300 w-5 h-5" />
                    <div className="bg-purple-300 w-5 h-5" />
                </Flex> */}
                {/* <Grid className={"m-4"} cols={2} alignItems={"center"} justifyContent={"center"}>
                    <div className="bg-red-300 w-5 h-5" />
                    <div className="bg-lime-300 w-5 h-5" />
                    <div className="bg-purple-300 w-5 h-5" />
                </Grid> */}
                {/* <div className="m-4">
                    <div className="main_box flex flex-col p-10 rounded-md bg-dark-800 border border-dark-50">
                        <div className="bar top"></div>
                        <div className="bar right delay"></div>
                        <div className="bar bottom delay"></div>
                        <div className="bar left"></div>
                        <img className="self-center mb-2" src={EmptyState} alt="" />
                        <Typography variant="h3" size="h4" decoration="lineBot" center className={"font-medium mb-4"}>
                            Lorem ipsum dolor sit.
                        </Typography>
                        <Typography center>
                            Lorem ipsum dolor sit amet <CustomLink to="/">consectetur</CustomLink> adipisicing elit. Debitis doloribus aspernatur laudantium veritatis inve
                        </Typography>
                        <div className="flex space-x-4 mx-auto w-fit mt-4">
                            <Button label="Prev" variant="outlined" />
                            <Button label="Next" variant="primary" />
                        </div>
                    </div>
                </div> */}
                {/* <div>
                    {items.map(({id, name, image, icon}) => {
                        return <Category key={id + name} content={name} image={image} icon={icon} />;
                    })}
                    <Form />
                    <Select />
                    <Toggle />
                    <Checkbox defaultSelected>Subscribe</Checkbox>
                </div>
                <div className="col-start-1 col-end-3">
                    <Slider />
                </div> */}
            </div>
        </div>
    );
};

export default WithWrapper(HomePage);
