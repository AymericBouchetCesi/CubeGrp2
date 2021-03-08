import {IonPage, IonContent, IonInput, IonButton, IonIcon, IonCard, IonCardTitle, IonCheckbox} from "@ionic/react";
import React, { useState } from "react";
import './Connection.css';

const Connection: React.FC = () => {
    const [userMail,setUserMail] = useState('')
    const [password,setPassword] = useState('')
    function login() {
        console.log(userMail, password)
    }


    return (
        <IonPage>
            <IonContent color={"light"}>
                <IonCard color={"secondary"}>
                    <IonCardTitle>Connection</IonCardTitle>
                    <IonInput name="mail" value={userMail} type="email" 
                    placeholder="VotreEmail@aaaaa.aa"
                    onIonChange={(e: any) => setUserMail(e.target.value)}>Email</IonInput>
                    <IonInput value={password} type="password" 
                    placeholder="Mot de passe"
                    onIonChange={(e: any) => setPassword(e.target.value)}> 
                    Mot de passe</IonInput>
                    <IonButton color ="primary" onClick={login}>Connection </IonButton>
                </IonCard>
                <IonCard>
                    <IonButton routerLink="/Inscription" color ="primary">Inscription</IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Connection;
