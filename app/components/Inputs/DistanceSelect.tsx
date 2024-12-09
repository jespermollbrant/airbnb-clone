import Select from "react-select";
import { SingleValue } from "react-select";

export type DistanceSelectValue = {
  label: string;
  value: string;
  distance: number;
};

interface DistanceSelectProps {
  value?: DistanceSelectValue;
  onChange: (value: DistanceSelectValue) => void;
}

const distances = [
  { value: "0-1", label: "0-1 km from university", distance: 1 },
  { value: "1-3", label: "1-3 km from university", distance: 3 },
  { value: "3-5", label: "3-5 km from university", distance: 5 },
  { value: "5-10", label: "5-10 km from university", distance: 10 },
  { value: "10+", label: "10+ km from university", distance: 15 },
];

const DistanceSelect: React.FC<DistanceSelectProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <Select
        placeholder="Select distance from university"
        isClearable
        options={distances}
        value={value}
        onChange={(value: SingleValue<DistanceSelectValue>) => onChange(value as DistanceSelectValue)}
        formatOptionLabel={(option: DistanceSelectValue) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.label}</div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
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

export default DistanceSelect; 