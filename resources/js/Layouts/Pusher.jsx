import { newMessage } from "@/bootstrap";
import { useNotification } from "@/Context/Notification";
import { Avatar, Button, Snackbar, Stack, Typography } from "@mui/joy";
import { useEffect } from "react";
import { useState } from "react";

export const Pusher = () => {
    const { setNotification, notification } = useNotification();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    useEffect(() => {
        newMessage({
            onPassed: (e) => {
                setNotification(e)
                console.log(e)
                setMessage(e.message);
                setOpen(true);
            }
        })
    }, [])
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={true}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                variant="solid"
                color="warning"
                invertedColors
                sx={(theme) => ({
                    background: `linear-gradient(45deg, ${theme.palette.primary[600]} 30%, ${theme.palette.primary[500]} 90%})`,
                    maxWidth: 360,
                })}
            >
                <div>
                    <Typography level="title-lg">Hey, Wait!!</Typography>
                    <Typography sx={{ mt: 1, mb: 2 }}>
                        Are you sure, you want to leave this page without confirming your order?
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Button variant="solid" color="primary" onClick={() => setOpen(false)}>
                            Yes, Maybe later
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => setOpen(false)}
                        >
                            No, I want to stay
                        </Button>
                    </Stack>
                </div>
            </Snackbar>
        </>
    );
}