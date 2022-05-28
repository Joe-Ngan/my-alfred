import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function Loading() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] p-4 bg-slate-100 rounded-md border-2 shadow-md justify-center items-center align-middle">
          <div className="lds-ripple">
              <div></div>
              <div></div>
         </div>
          <div className="text-blue-700/70 text-3xl font-bold" id="modal-modal-title" variant="h6">
            Thinking..
          </div>
        </Box>
      </Modal>
    </div>
  );
}
