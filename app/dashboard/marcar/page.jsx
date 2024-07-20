// pages/index.js

import RegistroHoras from '@/app/components/registro_horas/registroHoras';
import useSWR from 'swr';

const HomePage = () => {
    return (
        <div>
            <RegistroHoras />
        </div>
    );
};

export default HomePage;
