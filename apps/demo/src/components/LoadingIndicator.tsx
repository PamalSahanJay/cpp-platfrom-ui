import CircularProgress from '@mui/material/CircularProgress';
import { SxProps } from '@mui/material';

export interface LoadingIndicatorPropsType {
  sx?: SxProps;
  size?: number;
}

export const LoadingIndicator = ({
  sx,
  size = 40
}: LoadingIndicatorPropsType) => (
  <CircularProgress
    sx={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      marginTop: -10,
      marginLeft: -10,
      ...sx
    }}
    size={size}
  />
);
