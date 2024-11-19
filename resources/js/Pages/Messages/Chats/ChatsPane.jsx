import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { Box, Chip, IconButton, Input } from '@mui/joy';
import List from '@mui/joy/List';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { toggleMessagesPane } from '@/Components/utils';
import ChatListItem from './ChatListItem';
import { BorderTop } from '@mui/icons-material';

export default function ChatsPane(props) {
    const { chats, setSelectedChat, selectedChatId } = props;
    
    // สร้าง Component สำหรับส่วนหัวที่จะตรึง
    const StickyHeader = ({ title,S }) => (
        <Box
            sx={{
                position: 'sticky',
                top: 0,
                bgcolor: 'background.surface',
                zIndex: 2,
                borderBottom: '1px solid',
                borderColor: 'divider',
                ...S
            }}
        >
            <Stack
                direction="row" spacing={1}
                sx={{ alignItems: 'center', justifyContent: 'space-between', p: 2, pb: 1.5 }}
            >
                <Typography
                    component="h1"
                    endDecorator={
                        <Chip variant="soft" color="primary" size="md" slotProps={{ root: { component: 'span' } }}>
                            4
                        </Chip>
                    }
                    sx={{ fontSize: { xs: 'md', md: 'lg' }, fontWeight: 'lg', mr: 'auto' }}
                >
                    {title}
                </Typography>

                <IconButton variant="plain" aria-label="edit" color="neutral" size="sm" onClick={toggleMessagesPane} sx={{ display: { sm: 'none' } }}>
                    <CloseRoundedIcon />
                </IconButton>
            </Stack>
            <Box sx={{ px: 2, pb: 1.5 }}>
                <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" aria-label="Search"/>
            </Box>
        </Box>
    );

    return (
        <>
            <Sheet sx={{borderRight: '1px solid',borderColor: 'divider',height: '50dvh',overflowY: 'auto'}}>
                <StickyHeader title="กำลังเดินการ" />
                <List sx={{py: 0,'--ListItem-paddingY': '0.75rem','--ListItem-paddingX': '1rem'}}>
                    {chats.map((chat) => (
                        <ChatListItem
                            key={chat.id}
                            {...chat}
                            setSelectedChat={setSelectedChat}
                            selectedChatId={selectedChatId}
                        />
                    ))}
                </List>
            </Sheet>
            <Sheet sx={{borderRight: '1px solid',borderColor: 'divider',height: '50dvh',overflowY: 'auto'}}>
                <StickyHeader title="รอดำเนินการ" S={{borderTop : 'solid #0b6bcb 1px'}}/>
                <List sx={{py: 0,'--ListItem-paddingY': '0.75rem','--ListItem-paddingX': '1rem'}}>
                    {chats.map((chat) => (
                        <ChatListItem
                            key={chat.id}
                            {...chat}
                            setSelectedChat={setSelectedChat}
                            selectedChatId={selectedChatId}
                        />
                    ))}
                </List>
            </Sheet>
        </>
    );
}