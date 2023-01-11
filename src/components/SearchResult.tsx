import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FlightTypeType, DateType } from "../types";

export type SearchResultType = {
  flightType: FlightTypeType;
  departureDate: DateType;
  returnDate: DateType;
};

const SearchResult: React.FC<SearchResultType> = ({
  flightType,
  departureDate,
  returnDate,
}) => {
  return (
    <Container maxWidth="md">
      <Typography
        component="h2"
        variant="h4"
        align="center"
        color="text.primary"
      >
        You are searching for a{" "}
        {flightType === "roundtrip" ? "Round" : "One Way"} trip departing on{" "}
        {departureDate?.format("L")}{" "}
        {flightType === "roundtrip" &&
          `and returning on ${returnDate?.format("L")}`}
      </Typography>
    </Container>
  );
};

export default SearchResult;
