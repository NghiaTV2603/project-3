import { Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import MenuItem from '@mui/material/MenuItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import { tokens } from '../../../app/theme';
import useCreateChannelModal from '../../../hooks/modal/useCreateChannelModal';
import { useAppSelector } from '../../../hooks/useRedux';

function TagNameServer() {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const { handleOpen, modal } = useCreateChannelModal();
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);
   const { currentServer } = useAppSelector((state) => state.server);
   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };
   const navigate = useNavigate();
   const handleClose = () => {
      setAnchorEl(null);
   };
   return (
      <>
         <Stack
            height={50}
            px={1.5}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
               cursor: 'pointer',
               '&:hover': {
                  backgroundColor: colors.grey[750],
               },
            }}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            borderBottom={1.5}
            borderColor={colors.grey[900]}
         >
            <Typography fontSize={16} fontWeight={600}>
               {currentServer?.name || 'Name Server'}
            </Typography>
            {open ? <ClearIcon /> : <KeyboardArrowDownIcon />}
         </Stack>
         <Menu
            id="fade-menu"
            MenuListProps={{
               'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            sx={{
               marginLeft: 2,
               marginTop: 1,
               '& .MuiPaper-root': {
                  backgroundColor: '#000000',
               },
            }}
         >
            <MenuItem onClick={handleClose}>
               <Stack
                  sx={{ width: 190 }}
                  direction="row"
                  justifyContent="space-between"
               >
                  <Typography>Invite people</Typography>
                  <PersonAddIcon />
               </Stack>
            </MenuItem>
            <MenuItem onClick={handleClose}>
               <Stack
                  sx={{ width: 190 }}
                  direction="row"
                  justifyContent="space-between"
                  onClick={() => navigate('/server-settings')}
               >
                  <Typography>Setting server</Typography>
                  <SettingsIcon />
               </Stack>
            </MenuItem>
            <MenuItem
               onClick={() => {
                  handleClose();
                  handleOpen();
               }}
            >
               <Stack
                  sx={{ width: 190 }}
                  direction="row"
                  justifyContent="space-between"
               >
                  <Typography>Create Channel</Typography>
                  <AddCircleIcon />
               </Stack>
            </MenuItem>
         </Menu>
         {modal}
      </>
   );
}

export default TagNameServer;
