import * as React from 'react';
import { Backdrop, Box, Modal, Fade, Button, Typography, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Contact = ({ open, handleClose }) => {
    const handleSend = e => {
        alert('Your message send successfully!')
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h5" component="h2">
                            Contact With Us
                        </Typography>
                        <Box id="transition-modal-description" sx={{ mt: 1.5 }}>
                            <form onSubmit={handleSend}>
                                <TextField
                                    id="standard-basic1"
                                    label="Name"
                                    variant="standard"
                                    required
                                    sx={{ width: 1, mb: 2 }}
                                />
                                <TextField
                                    id="standard-basic2"
                                    label="Email"
                                    type="email"
                                    variant="standard"
                                    required
                                    sx={{ width: 1, mb: 2 }}
                                />
                                <TextField
                                    id="standard-basic3"
                                    label="Subject"
                                    variant="standard"
                                    required
                                    sx={{ width: 1, mb: 2 }}
                                />
                                <TextField
                                    id="standard-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={3}
                                    variant="standard"
                                    required
                                    sx={{ width: 1, mb: 2 }}
                                />
                                <Box sx={{ textAlign: 'right' }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ fontSize: '0.94em', color: 'white', fontWeight: 'bold' }}>
                                        Send &nbsp;
                                        <SendIcon sx={{ fontSize: '1.2em'}} />
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default Contact;