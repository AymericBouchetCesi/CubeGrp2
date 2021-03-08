import {IonPage, IonContent, IonInput, IonButton, IonIcon, IonCard, IonCardTitle, IonCheckbox} from "@ionic/react";
import React, { useState } from "react";
import './Inscription.css';

const Inscription: React.FC = () => {
    const [userMail,setUserMail] = useState('')
    const [password,setPassword] = useState('')
    const [cfPassword,setcfPassword] = useState('')
    function login() {
        console.log(userMail, password)
    }


    return (
        <IonPage>
            <IonContent color={"light"}>
                <IonCard color={"secondary"}>
                    <IonCardTitle>Inscription</IonCardTitle>
                        <IonInput value={userMail} type="email" 
                        placeholder="VotreEmail" onIonChange={(e: any) => setUserMail(e.target.value)}>
                        Email </IonInput>
                        <IonInput value={password} type="password" placeholder="Mot de passe"
                        onIonChange={(e: any) => setPassword(e.target.value)}> 
                        Mot de passe</IonInput>
                        <IonInput value={cfPassword} type="password" 
                        placeholder="Confirmation"
                        onIonChange={(e: any) => setcfPassword(e.target.value)}> 
                        Confirmation de mot de passe</IonInput>     
                    <IonButton color ="primary" onClick={login}>Inscription </IonButton>
                </IonCard>

                <IonCard>
                    <IonButton routerLink="/Connection" color ="primary">Connection</IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Inscription;
