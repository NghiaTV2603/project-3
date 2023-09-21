import { alpha, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Stack, Tooltip, useTheme } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PushPinIcon from '@mui/icons-material/PushPin';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { tokens } from '../../../app/theme';

const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
   },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '12ch',
         '&:focus': {
            width: '20ch',
         },
         height: '1.5ch',
      },
   },
}));

export default function AppBarStyle() {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   return (
      <Stack
         height={50}
         direction="row"
         alignItems="center"
         justifyContent="space-between"
         borderBottom={1.5}
         borderColor={colors.grey[850]}
         px={1}
      >
         <Stack direction="row" spacing={0.5} alignItems="center">
            <TagIcon />
            <Typography fontSize={16}>Name User</Typography>
         </Stack>
         <Stack direction="row" spacing={1} alignItems="center">
            <Tooltip title="start voice call" arrow>
               <IconButton size="small">
                  <WifiCalling3Icon />
               </IconButton>
            </Tooltip>
            <Tooltip title="start video call" arrow>
               <IconButton size="small">
                  <VideoCallIcon fontSize="large" />
               </IconButton>
            </Tooltip>
            <Tooltip title="start voice call" arrow>
               <IconButton size="small">
                  <PushPinIcon />
               </IconButton>
            </Tooltip>
            <Tooltip title="start voice call" arrow>
               <IconButton size="small">
                  <PersonAddIcon fontSize="medium" />
               </IconButton>
            </Tooltip>
            <Search>
               <SearchIconWrapper>
                  <SearchIcon />
               </SearchIconWrapper>
               <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
               />
            </Search>
         </Stack>
      </Stack>
   );
}
