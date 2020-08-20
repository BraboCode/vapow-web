import { useTypedTranslation } from 'i18n/i18n';
import * as React from 'react';

const Home = () => {
    const [t] = useTypedTranslation();
    return (
        <div>
            { t('home') }
        </div>
    );
};

export default Home;
