import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonMenu,
    IonItem,
    IonButtons,
    IonLabel,
    IonGrid,
    IonCol,
    IonRow,
    IonFooter,
    IonSplitPane,
    IonMenuToggle,
    IonButton,
    IonIcon,
} from '@ionic/react';
import React from 'react';
import './SplitPane.css';
import {menuOutline} from 'ionicons/icons'

const SplitPane: React.FC<{main:any}> = (props) => {

    //todo rendre paramétrable ce component (titre par exemple)

    return (
        <>
            <IonSplitPane when="lg" contentId="mainContent">
                <IonMenu side="start" menuId="first" contentId="mainContent">
                    <IonHeader>
                        <IonToolbar color="secondary">
                            <IonTitle color="primary">Connected username</IonTitle>
                        </IonToolbar>

                    </IonHeader>

                    <IonContent class="ionContentMenu">
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonItem routerLink="/post">
                                        <IonLabel>/post</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol>
                                    <IonItem routerLink="/connection">
                                        <IonLabel>/connection</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol>
                                    <IonItem routerLink="/inscription">
                                        <IonLabel>/inscription</IonLabel>
                                    </IonItem>
                                </IonCol>
                                <IonCol>
                                    <IonItem routerLink="/home">
                                        <IonLabel>/home</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonContent>

                    <IonFooter>
                        <IonItem routerLink="/settings">
                            <IonLabel>/Settings</IonLabel>
                        </IonItem>
                    </IonFooter>
                </IonMenu>

                <div className="ion-page" id="mainContent">
                    <IonHeader>
                        <IonToolbar color="secondary">
                            <IonButtons slot="start">
                                <IonMenuToggle>
                                    <IonButton>
                                        <IonIcon slot="icon-only" color="primary" icon={menuOutline}/>
                                    </IonButton>
                                </IonMenuToggle>
                            </IonButtons>
                            <IonTitle slot='secondary' color="primary" size='large'>R²</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent>
                        <br/>
                        {props.main}
                    </IonContent>
                </div>

            </IonSplitPane>
        </>
    );
};

export default SplitPane;
