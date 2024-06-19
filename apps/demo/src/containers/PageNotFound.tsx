import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import NoSearchResultIcon from '../assets/NoSearchResultIcon';

const PageNotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1" data-testid="invalid-url-message" noWrap>
          Page not found (404)
        </Typography>

        <Box pt={5} marginTop={10}>
          <NoSearchResultIcon
            sx={{
              width: '100%',
              maxWidth: '100vw',
              height: 'auto',
            }}
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          pt={5}
          marginTop={10}
        >
          <Typography
            variant="h3"
            component="span"
            paragraph
            data-testid="invalid-url-subMessage"
            sx={{
              maxWidth: '80vw',
              textAlign: 'center',
              margin: '0 auto',
            }}
          >
            Our apologies. <br />
            We can't find the page you are looking for. You can go back to
            <Link
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'underline',
                color: 'inherit',
                fontWeight: 'inherit',
                ml: 2,
              }}
            >
              home
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PageNotFound;
