import IUi from "@/interfaces/IUi";

interface IInput extends IUi {
  type:
    | "text"
    | "email"
    | "password"
    | "tel"
    | "number"
    | "date"
    | "time"
    | "datetime-local"
    | "search"
    | "url"
    | "month"
    | "week"
    | "color"
    | "file"
    | "hidden"
    | "image"
    | "range"
    | "reset"
    | "submit"
    | "button"
    | "checkbox"
    | undefined;
  placeholder?: string;
  label?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  required?: boolean;
}

const Input = ({
  type,
  placeholder,
  className,
  label,
  value,
  onChange,
  error,
  required,
}: IInput) => {
  const sizes = "w-[242px] h-[48px] lg:w-[388px]";

  const textSizes = "text-sm font-semibold text-[#2F2F2F]";

  const errorStyles = "text-[#A74040] !border-[#A74040]";

  return (
    <label
      className={`flex flex-col text-sm font-semibold text-[#979797] gap-1`}
    >
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={
          `rounded-xl pl-3 border-[#eee] border bg-[#fff] ${sizes} ${textSizes} ${
            error ? errorStyles : ""
          }` + ` ${className}`
        }
      />
    </label>
  );
};

export default Input;
