import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { DateType } from "../types";

export type DatePickerType = {
  label: string;
  date: DateType;
  onChange: (date: DateType) => void;
  minDate?: any;
  maxDate?: any;
};

const DatePickerComponent: React.FC<DatePickerType> = ({
  label,
  date,
  onChange,
  minDate,
  maxDate,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={date}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
        disablePast
        minDate={minDate}
        maxDate={maxDate}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
