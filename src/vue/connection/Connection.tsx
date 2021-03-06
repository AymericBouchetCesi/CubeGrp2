import {IonContent, IonInput, IonButton, IonCard, IonCardTitle} from "@ionic/react";
import React, { useState } from "react";
import './Connection.css';
import {loginViaMail} from '../../firebaseConf'
import { myToast } from "../../toast";
import SplitPane from "../../components/SplitPane/SplitPane";


const Connection: React.FC = () => {
    const [userMail,setUserMail] = useState('')
    const [password,setPassword] = useState('')

    async function login() {
        console.log(userMail, password)
        const res = await loginViaMail(userMail,password)
        console.log(`${res ?'Login valide' : 'Erreur de login'}`)
        if(!res) {
            myToast("Erreur de connection",2000,"danger")
        }else{
            myToast("Connection réussi",2000,"success")
            window.location.href = "/Post"
        }

    }


    return (
        <SplitPane main={
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
        }/>
    );
};

export default Connection;
