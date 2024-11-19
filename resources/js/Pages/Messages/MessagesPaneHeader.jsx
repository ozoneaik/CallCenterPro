import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { toggleMessagesPane } from '@/Components/utils';



export default function MessagesPaneHeader(props) {
    const { sender } = props;
    return (
        <Stack
            direction="row"
            sx={{
                justifyContent: 'space-between',
                py: { xs: 2, md: 2 },
                px: { xs: 1, md: 2 },
                borderBottom: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.body',
            }}
        >
            <Stack
                direction="row"
                spacing={{ xs: 1, md: 2 }}
                sx={{ alignItems: 'center' }}
            >
                <IconButton
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
                    onClick={() => toggleMessagesPane()}
                >
                    <ArrowBackIosNewRoundedIcon />
                </IconButton>
                <Avatar size="lg" src={sender.avatar} />
                <div>
                    <Typography
                        component="h2"
                        noWrap
                        endDecorator={
                            sender.online ? (
                                <Chip
                                    variant="outlined"
                                    size="sm"
                                    color="neutral"
                                    sx={{ borderRadius: 'sm' }}
                                    startDecorator={
                                        <CircleIcon sx={{ fontSize: 8 }} color="success" />
                                    }
                                    slotProps={{ root: { component: 'span' } }}
                                >
                                    Online
                                </Chip>
                            ) : undefined
                        }
                        sx={{ fontWeight: 'lg', fontSize: 'lg' }}
                    >
                        {sender.name}
                    </Typography>
                    <Typography level="body-sm">{sender.username}</Typography>
                </div>
            </Stack>
            <Stack spacing={1} direction="row" sx={{ alignItems: 'center' }}>
                <Button
                    color="neutral"
                    variant="outlined"
                    size="sm"
                    sx={{ display: { xs: 'none', md: 'inline-flex' } }}
                >
                    ส่งต่อไปยัง
                </Button>
                <Button
                    color="neutral"
                    variant="outlined"
                    size="sm"
                    sx={{ display: { xs: 'none', md: 'inline-flex' } }}
                >
                    จบการสนทนา
                </Button>
                <Button
                    color="neutral"
                    variant="outlined"
                    size="sm"
                    sx={{ display: { xs: 'none', md: 'inline-flex' } }}
                >
                    ข้อความส่งด่วน
                </Button>
            </Stack>
        </Stack>
    );
}