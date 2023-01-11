import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import { FlightTypeType } from "../types";

type FlightTypeToggleType = {
  flightType: FlightTypeType;
  onChange: (
    event: React.MouseEvent<HTMLElement>,
    newFlightType: FlightTypeType
  ) => void;
};

const FlightTypeToggle: React.FC<FlightTypeToggleType> = ({
  flightType,
  onChange,
}) => {
  return (
    <ToggleButtonGroup
      value={flightType}
      onChange={onChange}
      exclusive={true}
      aria-label="Flight Type"
    >
      <ToggleButton value="roundtrip">
        Round Trip
        <CompareArrowsIcon sx={{ ml: 1 }} />
      </ToggleButton>
      <ToggleButton value="oneway">
        One Way
        <ArrowRightAltIcon sx={{ ml: 1 }} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default FlightTypeToggle;
