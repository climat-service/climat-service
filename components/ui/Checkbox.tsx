import Input from "./Input";
import IUi from "@/interfaces/IUi";

interface CheckboxProps extends IUi {
  label?: string;
  onClick?: () => void;
  onChange?: () => void;
  value?: string;
}

const Checkbox = ({
  label,
  className,
  onClick,
  onChange,
  value,
}: CheckboxProps) => {
  const checkboxStyles = `!w-4 !h-4`;

  return (
    <label className="flex items-center justify-center gap-2 text-sm">
      <Input
        type="checkbox"
        className={`${checkboxStyles} ${className}`}
        onClick={onClick}
        onChange={onChange}
        value={value}
      />
      {label}
    </label>
  );
};

export default Checkbox;
