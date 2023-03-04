import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

const Input = ({ containerClassName = "", ...rest }: InputProps) => {
  return (
    <div
      className={`flex items-center border rounded-lg py-2 px-4 ${containerClassName}`}
    >
      <input
        {...rest}
        type="text"
        className="focus:outline-none w-full"
        placeholder="Pesquisar artigos, notícias, doenças..."
      />
    </div>
  );
};

export default Input;
