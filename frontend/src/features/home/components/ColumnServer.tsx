import React, { useEffect } from 'react';
import { Avatar, colors, Divider, Stack, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useRedux';
import serverSlice, { fetchServer, Server } from '../serverSlice';
import useCreateServerModal from '../../../hooks/modal/useCreateServerModal';

function ColumnServer(): JSX.Element {
   const { servers, currentServer } = useAppSelector((state) => state.server);
   const { user } = useAppSelector((state) => state.auth);
   const dispatch = useDispatch();
   useEffect(() => {
      if (!servers.length) {
         console.log(servers.length);
         dispatch(fetchServer(user?.id));
      }
   }, []);
   const { modal, handleOpen } = useCreateServerModal();
   const navigate = useNavigate();
   const handleSelectServer = (server: Server) => {
      dispatch(serverSlice.actions.selectServer(server));
      navigate(`/server/${server.id}`);
   };
   return (
      <Stack py={1} spacing={1} direction="column" alignItems="center">
         {servers.map((s) => (
            <Stack
               key={s.id}
               onClick={() => handleSelectServer(s)}
               flexDirection="column"
               spacing={0.8}
            >
               <Tooltip title={s.name} arrow placement="right">
                  <Avatar
                     sx={{
                        height: 45,
                        width: 45,
                        borderRadius: 22,
                        cursor: 'pointer',
                        '&:hover': {
                           borderRadius: 4,
                        },
                     }}
                     variant="rounded"
                     src={s.image}
                  />
               </Tooltip>
               <Divider
                  sx={{ width: '100%', borderBottomWidth: 2 }}
                  color={currentServer?.id === s.id ? colors.green[500] : ''}
               />
            </Stack>
         ))}
         <Tooltip title="Add a Server" arrow placement="right">
            <Avatar
               sx={{
                  height: 45,
                  width: 45,
                  borderRadius: 10,
                  cursor: 'pointer',
                  '&:hover': {
                     borderRadius: 4,
                     backgroundColor: colors.green[500],
                     color: colors.grey[100],
                  },
               }}
               variant="rounded"
               onClick={handleOpen}
            >
               <AddIcon fontSize="large" />
            </Avatar>
         </Tooltip>
         {modal}
      </Stack>
   );
}

export default ColumnServer;
