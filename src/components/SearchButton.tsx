import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

type SearchButtonType = { disabled: boolean; onClick: () => void };

const SearchButton: React.FC<SearchButtonType> = ({ disabled, onClick }) => {
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<SearchIcon />}
      disabled={disabled}
      onClick={onClick}
    >
      Search
    </Button>
  );
};

export default SearchButton;
