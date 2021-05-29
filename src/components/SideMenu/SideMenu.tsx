import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonMenu,
    IonItem,
    IonList,
    IonRouterOutlet,
    IonPage,
    IonMenuButton,
    IonButtons, IonButton, IonLabel,
} from '@ionic/react';
import React from 'react';

const SideMenu: React.FC = () => {

    //todo rendre paramétrable ce component (titre par exemple)

    return (
        <>
            <IonMenu side="start" menuId="first" contentId="menuContent">
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Start Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent >
                    <IonList>
                        <IonItem routerLink="/post">
                            <IonLabel>/post</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/connection">
                            <IonLabel>/connection</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/inscription">
                            <IonLabel>/inscription</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/home">
                            <IonLabel>/home</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle slot='secondary' size='large'>R²</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonRouterOutlet id="menuContent"/>
        </>
    );
};

export default SideMenu;
