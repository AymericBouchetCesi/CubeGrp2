import {IonPage, IonContent, IonInput, IonButton, IonIcon, IonCard, IonCardTitle, IonCheckbox} from "@ionic/react";
import React, { useEffect, useState } from "react";
import './Post.css';
import {getCurrentUser, loginViaMail} from '../../firebaseConf'
import {disconnectFromApp} from '../../firebaseConf'
import { myToast } from "../../toast";


const Post: React.FC = () => {
    async function disconnect() {
        console.log("disconnect")
        const res = await disconnectFromApp()
        if(!res) {
            myToast("Deconnection impossible",2000,"danger")
        }else{
            myToast("Deconnection réussi",2000,"success")
            window.location.href = "/"
        }
    }
    return (
        <IonPage>
            <IonContent color={"light"}>
                <IonCard color={"secondary"}>
                    <IonCardTitle>Post</IonCardTitle>
                    <IonButton  color ="primary" onClick={disconnect}>Deconnection</IonButton>
                </IonCard>
                <IonCard>
                    <IonButton routerLink="/Post" color ="primary">Recharger</IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Post;
