interface FormInputProps {
  label: string;
  name: string;
  type: string;
  defaultValue?: string;
  size?: string;
}

const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
}: FormInputProps) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </label>
  );
};

export default FormInput;
