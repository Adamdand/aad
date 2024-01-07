// react
import { FC } from "react";
import { Box } from "@mui/material";

interface LabelInputProps {
  value: string;
  labelText: string;
  placeholderText: string;
  textarea?: boolean;
  onChangeFunc: (text:string) => void;
}

const LabelInput: FC<LabelInputProps> = ({
  labelText,
  value,
  placeholderText,
  textarea,
  onChangeFunc,
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newText = e.target.value;
    onChangeFunc(newText);
  };
  
  return (
    <Box className="flex flex-col gap-2.5 flex-1 w-full">
      <label
        htmlFor={placeholderText}
        className="text-textPrimary text-base sm:text-lg font-bold"
      >
        {labelText}
      </label>

      {textarea ? (
        <textarea
          id={labelText}
          rows={9}
          placeholder={labelText}
          className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg
         placeholder-textSecondary outline-none resize-none border-[1px] border-transparent focus:border-hoverSecondary"
         onChange={handleChange}
        ></textarea>
      ) : (
        <input
          type="text"
          id={labelText}
          placeholder={labelText}
          autoComplete="off"
          className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg
          placeholder-textSecondary outline-none resize-none border-[1px] border-transparent focus:border-hoverSecondary"
          onChange={handleChange}
        />
      )}
    </Box>
  );
};

export default LabelInput;
