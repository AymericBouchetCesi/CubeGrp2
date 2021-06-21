import React from 'react';
import {
    IonToolbar,
    IonButton,
    IonIcon,
    IonHeader, IonTitle
} from '@ionic/react';

import {
    menuSharp
} from 'ionicons/icons';

const Header: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonButton fill='clear' slot='start' size='large'>
                    <IonIcon icon={menuSharp}/>
                </IonButton>
                <IonTitle slot='secondary' size='large'>R²</IonTitle>
            </IonToolbar>

        </IonHeader>
    );
};
export default Header;
