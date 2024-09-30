import Image from "next/image";
import React from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

export type InputProps<T extends FieldValues> = {
  label?: string;
  type?: string;
  name?: string;
  error?: string;
  inputWidth?: string;
  min?: string | number;
  max?: string | number;
  placeholder?: string;
  className?: string;
  autoFilled?: boolean;
  forgotPassword?: React.ReactNode;
  showForgotPasswordLink?: boolean;
  showEyeIcon?: boolean;
  extraIcon?: React.ReactNode;
  beforeIcon?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"input"> &
  UseControllerProps<T>;

export const Input = <T extends FieldValues>({
  label,
  autoFilled,
  type = "text",
  placeholder,
  className,
  min,
  max,
  inputWidth,
  disabled,
  forgotPassword,
  showEyeIcon = true,
  showForgotPasswordLink = false,
  extraIcon,
  beforeIcon,
  onInput = () => {},
  ...rest
}: InputProps<T>) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { field, fieldState } = useController(rest);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const numberInputOnWheelPreventChange = (e: any) => {
    // Prevent the input value change
    e.target.blur();

    // Prevent the page/container scrolling
    e.stopPropagation();

    // Refocus immediately, on the next tick (after the current function is done)
    setTimeout(() => {
      e.target.focus();
    }, 0);
  };

  const inputType = () => {
    if (showPassword && type === "password") return "text";
    if (!showPassword && type === "password") return "password";
    if (type === "tel" || type === "number") return "number";
    if (type === "date") return "date";
    return type;
  };

  const inputMode = () => {
    if (type === "tel" || type === "number") return "numeric";
    if (type === "email") return "email";
    if (type === "date") return "text";
    return "text";
  };

  const hasError = fieldState.error?.message ? "text-red-700" : "text-black";

  return (
    <div
      className={`relative mt-4  w-full ${className ?? ""}`}
      id={`${rest?.id ? rest?.id : rest?.name}-container`}
    >
      <label
        className="relative !text-base items-center justify-center"
        htmlFor={`${rest?.id ? rest?.id : rest?.name}`}
      >
        {type === "tel" && (
          <div
            className={`font-[Gilroy-semibold] absolute left-3 top-[55%] z-[2] -translate-y-1/2 transform pr-2 text-sm ${
              !!fieldState.error?.message ? "text-red-700" : "text-black"
            }`}
          >
            +234
          </div>
        )}
        {beforeIcon && (
          <p className="absolute left-1 top-3 -translate-y-1/2 transform cursor-pointer text-black">
            {beforeIcon}
          </p>
        )}
        <input
          {...field}
          id={`${rest?.id ? rest?.id : rest?.name}`}
          onWheel={numberInputOnWheelPreventChange}
          value={field.value || ""}
          onKeyDown={(evt) =>
            (type === "number" || type === "tell") &&
            ["e", "E", "+", "-"].includes(evt.key) &&
            evt.preventDefault()
          }
          type={inputType()}
          className={`placeholder:font-[Gilroy-Regular] max-h-full w-full max-w-4xl border px-3 rounded-xl bg-transparent  py-3 text-sm tracking-normal outline-none ${inputWidth} ${
            beforeIcon && "pl-4"
          } ${
            fieldState.error?.message
              ? "!border-red-400 text-red-400 focus:!border-red-400"
              : "border-[#D7D7D7]"
          }
              ${
                disabled && !autoFilled
                  ? "!font-[Gilroy-Regular] !border-[#D7D7D7] !bg-gray-100 !text-gray"
                  : ""
              }
              ${type === "tel" && "pl-[3.5rem]"}
              `}
          max={max}
          min={min}
          placeholder={placeholder}
          inputMode={inputMode()}
          disabled={disabled}
          pattern={type === "tel" || type === "number" ? "[0-9]*" : "(.*?)"}
          autoComplete="off"
          onInput={onInput}
        />
        {extraIcon && (
          <p className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer text-black">
            {extraIcon}
          </p>
        )}

        {type === "password" && (
          <div
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer"
          >
            {showEyeIcon && (
              <Image
                src={
                  showPassword
                    ? "/assets/svgs/eye-open.svg"
                    : "/assets/svgs/eye-closed.svg"
                }
                width={16}
                height={16}
                alt={showPassword ? "EyeOpen" : "EyeClosed"}
              />
            )}
          </div>
        )}
        {type !== "radio" && type !== "checkbox" && (
          <div className="absolute bottom-8 left-0 flex pb-1">
            <span
              className={` text-xs ${
                disabled && !autoFilled ? "text-black" : hasError
              }`}
            >
              {label}
            </span>
          </div>
        )}
      </label>
      {(!!fieldState.error?.message || showForgotPasswordLink) && (
        <div className="flex w-full items-center justify-between">
          <p className="mx-0 my-1  text-xs text-red-700">
            {fieldState?.error?.message}
          </p>
          {forgotPassword}
        </div>
      )}
    </div>
  );
};
