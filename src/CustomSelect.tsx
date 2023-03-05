import React, { useEffect } from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";

export const CustomSelect = (props: any) => {
  const { name, control, children } = props;

  const { register } = useFormContext();

  return (
    // <Controller
    //   control={control}
    //   name={name}
    //   defaultValue={""}
    //   render={({ field: { onChange } }) => (
    //     <select defaultValue={children[0].props.value}>{children}</select>
    //   )}
    // />

    <select {...register(name)} defaultValue={children[0].props.value}>
      {children}
    </select>
  );
};
