import {Disclosure, Transition} from "@headlessui/react";
import WithWrapper from "@/components/HOC/WithWrapper";

const FaqPage = () => {
    return (
        <>
            <div className="flex flex-col items-center w-[360px]">
                <Disclosure>
                    {({open}) => (
                        <>
                            <div className={"flex flex-col w-full"}>
                                <Disclosure.Button className={"p-4 bg-dark-200"}>Is team pricing available?</Disclosure.Button>
                                <Transition
                                    show={open}
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform max-h-[0]"
                                    enterTo="transform max-h-[500px]"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform translate-y-0 opacity-100"
                                    leaveTo="transform translate-y-12 opacity-0"
                                >
                                    <Disclosure.Panel static className={"p-4 bg-dark-100"}>
                                        Yes! You can purchase a license that you can share with your entire team.
                                    </Disclosure.Panel>
                                </Transition>
                            </div>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({open}) => (
                        <>
                            <div className={"flex flex-col w-full"}>
                                <Disclosure.Button className={"p-4 bg-dark-200"}>Is team pricing available?</Disclosure.Button>
                                <Transition
                                    show={open}
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel static className={"p-4 bg-dark-100"}>
                                        Yes! You can purchase a license that you can share with your entire team.
                                    </Disclosure.Panel>
                                </Transition>
                            </div>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    );
};

export default WithWrapper(FaqPage);
