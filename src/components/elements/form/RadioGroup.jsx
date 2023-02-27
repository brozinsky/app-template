import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import classNames from "clsx";
import {cva} from "class-variance-authority";

const optionStyles = cva(["w-full h-full p-4 select-none text-center"], {
    variants: {
        checked: {
            true: ["", "dark:bg-dark-100"],
            false: ["", "dark:bg-dark-800"]
        },
    },
});

const CustomRadioGroup = ({options, label}) => {
  let [plan, setPlan] = useState('startup');

  return (
    <RadioGroup className={"flex flex-wrap justify-start items-center h-fit w-fit gap-2"} value={plan} onChange={setPlan}>
      {label ? <RadioGroup.Label>{label}</RadioGroup.Label> : null}
      {options.map(({id, label, value}) => {
        return (
            <RadioGroup.Option className={`h-fit w-fit cursor-pointer min-w-[80px]`} key={id} value={value}>
                {({ checked }) => (
                    <div className={optionStyles({checked})}>{label}</div>
                )}
          </RadioGroup.Option>
        )
      })}
    </RadioGroup>
  )
}

export default CustomRadioGroup;
