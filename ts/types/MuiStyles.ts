import { SxProps, Theme } from '@mui/material';

type MuiStyles = (props?: object) => Record<string, SxProps<Theme> | undefined>;

export default MuiStyles;
