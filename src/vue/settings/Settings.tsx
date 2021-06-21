import {
    IonPage
} from '@ionic/react';
import React from 'react';

import SplitPane from "../../components/SplitPane/SplitPane";

const Settings: React.FC = () => {
    return (
        <SplitPane main={
            <IonPage>
                <label>Bonsoir à tous</label>
            </IonPage>
            }
        />
    );
};

export default Settings;
