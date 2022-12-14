import { NextPage } from "next"
import React, { Dispatch, SetStateAction, useState } from "react"

interface IInputProps {
  flex?: boolean
  disabled?: boolean
  label: string
  type?: string
  placeholder?: string
  setValue: Dispatch<SetStateAction<any>>
  defaultVal?: any
}

const Input: NextPage<IInputProps> = ({
  flex,
  disabled,
  label,
  type,
  placeholder,
  setValue,
  defaultVal,
}) => {
  return (
    <div 
      className={
        flex
          ? "my-8 flex gap-4 items-center text-textColor font-mono"
          : "my-8 text-textColor font-mono flex flex-col gap-2"
      }
    >
      <p
        className={
          flex ? "w-[130px] text-xl font-semibold" : "text-xl font-semibold"
        }
      >
        {label}
      </p>
      <input
        value={defaultVal && defaultVal}
        disabled={disabled && disabled}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        type={type ? `${type}` : "text"}
        className="border-2 w-full border-borderColor bg-[#fff] rounded-md px-2 py-1 active:border-primary font-sans"
      />
    </div>
  )
}

export default Input
