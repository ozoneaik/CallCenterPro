import {usePage } from '@inertiajs/react';
import { Box, CssBaseline, CssVarsProvider } from '@mui/joy';
import Sidebar from './Sidebar';
import Header from './Header';
export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline/>
            <Box sx={{display : 'flex', minHeight : '100dvh'}}>
                <Sidebar user={user}/>
                <Header/>
                <Box component='main' className='MainContent' sx={{flex : 1}}>
                    {children}
                </Box>
            </Box>
        </CssVarsProvider>
    );
}
