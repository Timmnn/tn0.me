type DropdownProps<IdType extends string | number> = {
  options: {
    id: IdType;
    label: string;
  }[];
  label?: string;
  className?: string;
  value: IdType;
  onChange: (value: IdType) => void;
};

export const Dropdown = <IdType extends string | number>({
  options,
  label = "",
  className = "",
  value,
  onChange,
}: DropdownProps<IdType>) => {
  return (
    <label>
      {label}
      <select
        name={label}
        id={label}
        className={`bg-slate-400 rounded-lg ${className}`}
        onChange={(e) => {
          // Convert back to the original type (string or number)
          const selectedValue =
            typeof value === "number"
              ? (Number(e.target.value) as unknown as IdType)
              : (e.target.value as unknown as IdType);

          onChange(selectedValue);
        }}
        value={String(value)}
      >
        {options.map((option) => (
          <option value={String(option.id)} key={String(option.id)}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
