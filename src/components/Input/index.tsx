import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  register?: UseFormRegisterReturn;
}

const Input = ({ containerClassName = "", register, ...rest }: InputProps) => {
  return (
    <div
      className={`flex items-center border rounded-lg py-2 px-4 ${containerClassName}`}
    >
      <input
        {...rest}
        {...register}
        type="text"
        className={`focus:outline-none w-full ${rest.className}`}
      />
    </div>
  );
};

export default Input;
