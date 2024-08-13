import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

export default function BasicTooltip() {
  return (
    <Tooltip title="Delete">
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
}