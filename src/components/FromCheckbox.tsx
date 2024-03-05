interface FromCheckboxProps {
  label: string;
  name: string;
  defaultValue?: boolean;
  size: string;
}

const FromCheckbox = ({
  label,
  name,
  defaultValue,
  size,
}: FromCheckboxProps) => {
  return (
    <div className=" form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        className={`checkbox checkbox-primary ${size}`}
        defaultChecked={defaultValue}
      />
    </div>
  );
};

export default FromCheckbox;
