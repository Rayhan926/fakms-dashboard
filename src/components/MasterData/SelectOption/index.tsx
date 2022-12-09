import React, { Fragment, useState } from "react";
import { currencies } from "../../../config/constants";
import { Listbox, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { v4 as uuid } from "uuid";
import useMasterData from "../../../hooks/useMasterData";

const SelectOption = () => {
  const { addInitialRow } = useMasterData();
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const handleChange = (e: any) => {
    addInitialRow({
      id: uuid(),
      name: e.label,
      description: "",
      station: "",
    });
    setSelectedCurrency(e);
  };
  return (
    <div className="w-full">
      <Listbox value={currencies} onChange={handleChange}>
        <div className="relative">
          <Listbox.Button className="relative cursor-pointer w-full rounded-lg bg-white py-3 px-4 text-left border border-slate-200">
            <span className="block truncate">{selectedCurrency.label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BiChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {currencies.map((currency, id) => (
                <Listbox.Option
                  key={id}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 px-4 ${
                      selectedCurrency.value === currency.value
                        ? "bg-primary text-white"
                        : active
                        ? "bg-primary/5 text-primary"
                        : "text-gray-900"
                    }`
                  }
                  value={currency}
                >
                  <span className={`block truncate text-left`}>
                    {currency.label}
                  </span>
                  {/* {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null} */}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default SelectOption;
