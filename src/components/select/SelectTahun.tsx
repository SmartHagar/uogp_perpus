/** @format */

import React, { FC } from "react";
import Select from "react-select";
import moment from "moment";
import { Controller } from "react-hook-form";

type Props = {
  label: string;
  start: number;
  end: number;
  control: any;
  required?: boolean;
  name: string;
  errors?: any;
  addClass: any;
  menuPosition?: string;
  placeholder?: string;
};

const SelectTahun: FC<Props> = ({
  label,
  start = 2012,
  end = moment().format("YYYY"),
  control,
  required,
  name,
  errors,
  addClass,
  menuPosition = "fixed" as any,
  placeholder = "Pilih Tahun",
}) => {
  const pilihTahun = () => {
    const array = [];
    for (let index: any = end; index >= start; index--) {
      array.push({ value: index, label: index });
    }
    return array;
  };

  return (
    <div className={addClass}>
      <label className="text-sm font-medium text-gray-700 tracking-wide">
        {label}
      </label>
      {required && <span className="ml-1 text-red-600">*</span>}
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field: { onChange, value, name, ref } }) => (
          <Select
            isClearable={true}
            isSearchable={true}
            options={pilihTahun()}
            placeholder={placeholder}
            menuPosition={menuPosition}
            ref={ref}
            value={value ? pilihTahun().find((x) => x.value === value) : value}
            onChange={(option: any) => onChange(option ? option.value : option)}
          />
        )}
      />
      {errors?.type === "required" && (
        <p className="text-red-500 font-inter italic text-sm">
          Tahun tidak boleh kosong
        </p>
      )}
    </div>
  );
};

export default SelectTahun;
