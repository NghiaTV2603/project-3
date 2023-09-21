import * as React from 'react';
import {
   DialogTitle,
   IconButton,
   Dialog,
   Container,
   TextField,
   Stack,
   Button,
   Divider,
   Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../useRedux';
import { AddServer, joinServer } from '../../features/home/serverSlice';

export default function useCreateServerModal() {
   const [open, setOpen] = React.useState<boolean>(false);
   const { user } = useAppSelector((state) => state.auth);
   const [input, setInput] = React.useState<object>({});
   const [code, setCode] = React.useState<string>('');
   const dispatch = useDispatch();
   const handleChangeInput = (field: string, value: string) =>
      setInput((prevState) => ({ ...prevState, [field]: value }));
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const handleCreate = async () => {
      const data = {
         email: user.email || 'nghiatran@gmail.com',
         userIds: [user.id || 'eDM2GgS3sZJNRS3du9mT'],
         ...input,
      };
      await dispatch(AddServer(data));
      setOpen(false);
   };
   const handleJoin = async () => {
      await dispatch(
         joinServer({
            userId: user.id,
            code,
         })
      );
      setOpen(false);
   };

   const modal = (
      <div>
         <Dialog open={open} onClose={handleClose}>
            <Container sx={{ position: 'relative', width: 400 }}>
               <IconButton
                  aria-label="close"
                  sx={{
                     position: 'absolute',
                     top: 14,
                     right: 16,
                     color: (theme) => theme.palette.grey[500],
                  }}
                  onClick={handleClose}
               >
                  <CloseIcon />
               </IconButton>
               <DialogTitle align="center">
                  <Typography variant="h3"> Create New Server</Typography>
               </DialogTitle>
               <Stack py={1} spacing={2}>
                  <TextField
                     onChange={(e) => handleChangeInput('name', e.target.value)}
                     label="Server Name"
                     variant="filled"
                     color="success"
                     fullWidth
                  />
                  <TextField
                     onChange={(e) =>
                        handleChangeInput('description', e.target.value)
                     }
                     multiline
                     label="Description"
                     variant="filled"
                     color="success"
                  />
               </Stack>
               <Stack direction="row-reverse" pb={2}>
                  <Button variant="contained" onClick={handleCreate}>
                     Create
                  </Button>
               </Stack>
               <Divider />
               <Stack py={1}>
                  <Typography pt={1} fontWeight={500} fontSize={18}>
                     Join a server with link invite
                  </Typography>
                  <TextField
                     multiline
                     label="Link Invite"
                     variant="filled"
                     color="success"
                     value={code}
                     onChange={(e) => setCode(e.target.value)}
                  />
                  <Stack direction="row-reverse" py={1}>
                     <Button variant="contained" onClick={handleJoin}>
                        Join Server
                     </Button>
                  </Stack>
               </Stack>
            </Container>
         </Dialog>
      </div>
   );
   return { open, handleOpen, handleClose, modal, input, setInput };
}
