import { useState, useEffect, MouseEvent } from "react";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import FlightTypeToggle from "../components/FlightTypeToggle";
import DatePicker from "../components/DatePicker";
import SearchButton from "../components/SearchButton";
import SearchResult from "../components/SearchResult";

import { FlightTypeType, DateType } from "../types";

const FlightSearch = () => {
  const [flightType, setFlightType] = useState<FlightTypeType>("roundtrip");
  const [departureDate, setDepartureDate] = useState<DateType>(null);
  const [returnDate, setReturnDate] = useState<DateType>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setSubmitted(false);
  }, [flightType, departureDate, returnDate]);

  const handleChangeFlightType = (
    event: MouseEvent<HTMLElement>,
    newFlightType: FlightTypeType
  ) => {
    setFlightType(newFlightType);
  };

  const handleChangeDepartureDate = (newDate: DateType) => {
    setDepartureDate(newDate);
  };

  const handleChangeReturnDate = (newDate: DateType) => {
    setReturnDate(newDate);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const isSubmitDisabled =
    !departureDate ||
    (flightType === "roundtrip" &&
      (!returnDate || departureDate?.isAfter(returnDate)));

  const showErrorMessage =
    flightType === "roundtrip" && departureDate?.isAfter(returnDate);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper
          elevation={4}
          sx={{ p: 4, mb: 4, display: "flex", flexDirection: "column" }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Flight search
          </Typography>

          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <FlightTypeToggle
              flightType={flightType}
              onChange={handleChangeFlightType}
            />

            <DatePicker
              label="Departure Date"
              date={departureDate}
              onChange={handleChangeDepartureDate}
              maxDate={flightType === "roundtrip" ? returnDate : null}
            />

            {flightType === "roundtrip" && (
              <DatePicker
                label="Return Date"
                date={returnDate}
                onChange={handleChangeReturnDate}
                minDate={departureDate}
              />
            )}

            <SearchButton onClick={handleSubmit} disabled={isSubmitDisabled} />
          </Stack>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            {showErrorMessage && (
              <Alert severity="error">
                Return date cannot be after the departure date!
              </Alert>
            )}
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        {submitted && (
          <SearchResult
            flightType={flightType}
            departureDate={departureDate}
            returnDate={returnDate}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default FlightSearch;
