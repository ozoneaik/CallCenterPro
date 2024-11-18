import { ListItem,ListItemButton,Typography,List,ListItemContent,Box } from "@mui/joy"
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from "react";
function Toggler(props) {
    const { defaultExpanded = false, renderToggle, children } = props;
    const [open, setOpen] = useState(defaultExpanded);
    return (
        <>
            {renderToggle({ open, setOpen })}
            <Box
                sx={[
                    {
                        display: 'grid',
                        transition: '0.2s ease',
                        '& > *': {
                            overflow: 'hidden',
                        },
                    },
                    open ? { gridTemplateRows: '1fr' } : { gridTemplateRows: '0fr' },
                ]}
            >
                {children}
            </Box>
        </>
    );
}

export const SidebarAdmin = () => {
    return (
        <>
            <ListItem nested>
                <Toggler
                    renderToggle={({ open, setOpen }) => (
                        <ListItemButton onClick={() => setOpen(!open)}>
                            <AssignmentRoundedIcon />
                            <ListItemContent>
                                <Typography level="title-sm">Tasks</Typography>
                            </ListItemContent>
                            <KeyboardArrowDownIcon
                                sx={[
                                    open
                                        ? {
                                            transform: 'rotate(180deg)',
                                        }
                                        : {
                                            transform: 'none',
                                        },
                                ]}
                            />
                        </ListItemButton>
                    )}
                >
                    <List sx={{ gap: 0.5 }}>
                        <ListItem sx={{ mt: 0.5 }}>
                            <ListItemButton>All tasks</ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>Backlog</ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>In progress</ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>Done</ListItemButton>
                        </ListItem>
                    </List>
                </Toggler>
            </ListItem>
        </>
    )
}