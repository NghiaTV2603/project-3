import * as React from 'react';
import {
   DialogTitle,
   DialogContent,
   IconButton,
   Dialog,
   Container,
   TextField,
   Stack,
   Button,
   Typography,
   FormControl,
   RadioGroup,
   FormControlLabel,
   Radio,
   Switch,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import LockIcon from '@mui/icons-material/Lock';
import { defaultChannel } from '../../app/constants';
import channelSlice, {
   AddChannel,
   Channel,
} from '../../features/home/channelSlice';
import { useAppDispatch, useAppSelector } from '../useRedux';
import { AddServer } from '../../features/home/serverSlice';

export default function useCreateChannelModal() {
   const [open, setOpen] = React.useState<boolean>(false);
   const [input, setInput] = React.useState<Channel>(defaultChannel);
   const { currentServer } = useAppSelector((state) => state.server);

   const dispatch = useAppDispatch();
   const handleChangeInput = (field: string, value: unknown) =>
      setInput((prevState) => ({ ...prevState, [field]: value }));
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const handleCreateChannel = () => {
      const data = {
         ...input,
         serverId: currentServer?.id,
      };
      dispatch(AddChannel(data));
      handleClose();
      setInput(defaultChannel);
   };
   const modal = (
      <Dialog open={open} onClose={handleClose}>
         <Container sx={{ position: 'relative', width: 500 }}>
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
               <Typography variant="h3"> Create Channel</Typography>
            </DialogTitle>
            <DialogContent>
               <Typography fontWeight={500} fontSize={16}>
                  Channel type
               </Typography>
               <FormControl>
                  <RadioGroup
                     aria-labelledby="demo-controlled-radio-buttons-group"
                     name="controlled-radio-buttons-group"
                     value={input.type}
                     onChange={(e) => handleChangeInput('type', e.target.value)}
                  >
                     <FormControlLabel
                        value="text"
                        control={<Radio />}
                        label="Text"
                     />
                     <FormControlLabel
                        value="voice"
                        control={<Radio />}
                        label="Voice"
                     />
                  </RadioGroup>
               </FormControl>
               <Stack spacing={1.5} pt={1}>
                  <TextField
                     id="outlined-basic"
                     label="Channel Name"
                     variant="filled"
                     value={input.name}
                     onChange={(e) => handleChangeInput('name', e.target.value)}
                     InputLabelProps={{
                        style: {
                           color: 'white',
                        },
                     }}
                  />
                  <TextField
                     multiline
                     id="outlined-basic"
                     label="Description"
                     variant="filled"
                     value={input.description}
                     onChange={(e) =>
                        handleChangeInput('description', e.target.value)
                     }
                     InputLabelProps={{
                        style: {
                           color: 'white',
                        },
                     }}
                  />
               </Stack>
               <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={1}
               >
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                     <LockIcon />
                     <Typography>Private Channel</Typography>
                  </Stack>
                  <FormControlLabel
                     control={
                        <Switch
                           color="success"
                           checked={input.isPublish}
                           onChange={(e) =>
                              handleChangeInput('isPublish', e.target.checked)
                           }
                        />
                     }
                     label=""
                  />
               </Stack>
            </DialogContent>
            <Stack direction="row-reverse" pb={2}>
               <Button variant="contained" onClick={handleCreateChannel}>
                  Create
               </Button>
            </Stack>
         </Container>
      </Dialog>
   );
   return { modal, handleOpen, handleClose };
}
