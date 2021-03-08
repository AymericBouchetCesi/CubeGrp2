import {IonPage, IonContent, IonInput, IonButton, IonIcon, IonCard, IonCardTitle, IonCheckbox} from "@ionic/react";
import React, { useEffect, useState } from "react";
import './Post.css';
import {disconnectFromApp, test} from '../../firebaseConf'
import { myToast } from "../../toast";

const Post: React.FC = () => {
    useEffect(() => {

    }, [])
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
    async function tt() {
        console.log("disconnect")
        test()
    }
    return (
        <IonPage>
            <IonContent color={"light"}>
                <IonCard color={"secondary"}>
                    <IonCardTitle>Post</IonCardTitle>
                    <IonButton  color ="primary" onClick={disconnect}>Deconnection</IonButton>
                </IonCard>
                <IonCard>
                    <IonButton routerLink="/post/newPost" color ="primary">Nouveau post</IonButton>
                    <IonButton routerLink="/Post" color ="primary" onClick={tt}>Recharger</IonButton>
                    
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Post;
