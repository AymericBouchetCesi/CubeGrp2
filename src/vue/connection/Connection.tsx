import {IonPage, IonContent, IonInput, IonButton, IonIcon, IonCard, IonCardTitle, IonCheckbox} from "@ionic/react";
import React, { useEffect, useState } from "react";
import './Connection.css';
import {getCurrentUser, loginViaMail} from '../../firebaseConf'
import { myToast } from "../../toast";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";


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
        <IonPage>
            <SideMenu/>
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
