"use client";

import useCountries from "@/app/hooks/useCountries";
import Select, { SingleValue } from "react-select";

export type CountrySelectValue = {
  label: string;
  value: string;
  flag: string;
  latlng: number[];
  region: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div className="flex flex-col gap-2">
      <Select
        placeholder="Select a country"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value: SingleValue<CountrySelectValue>) => 
          onChange(value as CountrySelectValue)
        }
        formatOptionLabel={(option: CountrySelectValue) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1"> {option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg ",
        }}
        theme={(theme: any) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "#737373",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
