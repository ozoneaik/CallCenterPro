import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Sheet } from "@mui/joy";
import { useState } from "react";
import { chats } from "../data";
import { Head } from "@inertiajs/react";
import ChatsPane from "./Chats/ChatsPane";
import MessagesPane from "./MessagesPane";

export default function Messages() {
    // const [selectedChat, setSelectedChat] = useState(chats[0]);
    const [selectedChat, setSelectedChat] = useState({});
    return (
        <>
        
        {/* <AuthenticatedLayout> */}
            <Head title="Messages" />
            <Sheet
                sx={{
                    flex: 1,
                    width: '100%',
                    mx: 'auto',
                    pt: { xs: 'var(--Header-height)', md: 0 },
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'minmax(min-content, min(30%, 400px)) 1fr',
                    },
                }}>
                <Sheet
                    sx={{
                        position: { xs: 'fixed', sm: 'sticky' },
                        transform: {
                            xs: 'translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))',
                            sm: 'none',
                        },
                        transition: 'transform 0.4s, width 0.4s',
                        zIndex: 100,
                        width: '100%',
                        top: 52,
                    }}
                >
                    <ChatsPane
                        chats={chats}
                        selectedChatId={selectedChat.id}
                        setSelectedChat={setSelectedChat}
                    />
                </Sheet>
                {selectedChat.id ? (
                    <MessagesPane chat={selectedChat} />
                ) : (
                    <>กรุณาเลือกแชท</>
                )}
            </Sheet>
        {/* </AuthenticatedLayout> */}
        </>
    )
}

Messages.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>