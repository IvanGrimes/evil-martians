import { useRef } from "react";
import s from "./TextField.module.css";
import { clsx } from "@/lib/clsx";
import { AriaTextFieldOptions, useTextField } from "@/lib/aria";

export type TextFieldProps = AriaTextFieldOptions<"input"> & { className?: string; label: string };

export const TextField = (props: TextFieldProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { className, label, errorMessage } = props;
  const { inputProps, labelProps, errorMessageProps } = useTextField(props, ref);

  return (
    <div className={clsx(s.root, errorMessage && s.error, className)}>
      <label className={s.label} {...labelProps}>
        {label}
      </label>
      <input ref={ref} className={s.input} {...inputProps} />
      {errorMessage && (
        <span className={s.errorMessage} {...errorMessageProps}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};
