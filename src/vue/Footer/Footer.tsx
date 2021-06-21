import React from 'react';
import {
    IonToolbar,
    IonFooter,
    IonSegment,
    IonSegmentButton,
    IonButton,
    IonIcon
} from '@ionic/react';
import {homeSharp, searchSharp, addCircleSharp, saveSharp, statsChartSharp} from 'ionicons/icons';

const Footer: React.FC = () => {
    return (
        <IonFooter>
            <IonToolbar>
                <IonSegment value="Home">
                    <IonSegmentButton value="Home">
                        <IonIcon icon={homeSharp}/>
                    </IonSegmentButton>
                    <IonSegmentButton value="Search">
                        <IonIcon icon={searchSharp}/>
                    </IonSegmentButton>

                    {/*<IonFab vertical="center" horizontal="end" slot="fixed">*/}
                    {/*    <IonFabButton>*/}
                    {/*        <IonIcon icon={add} />*/}
                    {/*    </IonFabButton>*/}
                    {/*</IonFab>*/}


                    <IonButton shape='round' size='large'>
                        <IonIcon icon={addCircleSharp}/>
                    </IonButton>

                    <IonSegmentButton value="Save">
                        <IonIcon icon={saveSharp}/>
                    </IonSegmentButton>
                    <IonSegmentButton value="Stats">
                        <IonIcon icon={statsChartSharp}/>
                    </IonSegmentButton>
                </IonSegment>
            </IonToolbar>
        </IonFooter>
    );
};
export default Footer;
