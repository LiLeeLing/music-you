import {
  Box,
  Paper,
  Typography,
  TypographyVariant,
  useTheme,
} from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";

export default function Col(
  props: PropsWithChildren & {
    title?: string;
    subTitle?: string;
    more?: ReactNode;
    variant?: TypographyVariant;
  }
) {
  const theme = useTheme();
  return (
    <div>
      <Box className="mb-3">
        <Box>
          <Typography
            variant="caption"
            sx={{ color: theme.palette.onSurface.main }}
          >
            {props.subTitle}
          </Typography>
        </Box>
        <Box
          className="flex justify-between"
          sx={{ color: theme.palette.onSurface.main }}
        >
          <Typography variant={props.variant ?? "h5"}>{props.title}</Typography>
          <Box>{props.more}</Box>
        </Box>
      </Box>

      {props.children}
    </div>
  );
}