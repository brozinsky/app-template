import React, {useEffect} from "react";
import * as SliderElement from "@radix-ui/react-slider";

const Slider = ({value, maxValue = 100, width = "w-[200px]", setValue, commitValue, defaultValue = [100], ariaLabel = "Volume"}) => (
    <>
        <SliderElement.Root value={value} onValueChange={(x) => setValue(x)} className={`relative flex items-center select-none touch-none ${width} h-5`} defaultValue={defaultValue} max={maxValue} step={1} aria-label={ariaLabel}>
            <SliderElement.Track className="bg-gray-600 relative grow rounded-full h-[3px]">
                <SliderElement.Range className="absolute bg-white rounded-full h-full" />
            </SliderElement.Track>
            <SliderElement.Thumb className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-gray-700 rounded-[10px] hover:bg-gray-300 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-gray-600 cursor-pointer" />
        </SliderElement.Root>
    </>
);

export default Slider;
