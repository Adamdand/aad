// react
import { FC } from "react";
import { Box } from "@mui/material";

interface LabelInputProps {
  labelText: string;
  placeholderText: string;
  textarea?: boolean;
}

const LabelInput: FC<LabelInputProps> = ({
  labelText,
  placeholderText,
  textarea,
}) => {
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
          id={placeholderText}
          rows={9}
          placeholder={placeholderText}
          className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg
         placeholder-textSecondary outline-none resize-none border-[1px] border-transparent focus:border-hoverSecondary"
        ></textarea>
      ) : (
        <input
          type="text"
          id={placeholderText}
          placeholder={placeholderText}
          autoComplete="off"
          className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg
          placeholder-textSecondary outline-none resize-none border-[1px] border-transparent focus:border-hoverSecondary"
        />
      )}
    </Box>
  );
};

export default LabelInput;
