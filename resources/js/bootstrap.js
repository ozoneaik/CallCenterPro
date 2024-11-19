import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Echo from "laravel-echo";
import Pusher from "pusher-js";
window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: 'pusher',
    key: 'a7e121624aaf1e49fad8',
    cluster: 'ap1',
    forceTLS: true
})

export const newMessage = ({ onPassed }) => {
    const channel = echo.channel('notification');
    channel.listen('.my-event', (e) => {     
        onPassed(e);
    });
    return ()=> {
        channel.stopListening('.my-event');
        echo.leaveChannel('notification');
    }

}
