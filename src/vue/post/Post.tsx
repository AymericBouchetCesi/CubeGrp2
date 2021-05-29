import {IonPage, IonContent, IonInput, IonButton, IonIcon, IonCard, IonCardTitle, IonCheckbox} from "@ionic/react";
import React, { useEffect, useState } from "react";
import './Post.css';
import {disconnectFromApp, test,refresh} from '../../firebaseConf'
import { myToast } from "../../toast";
import ItemList from '../../ItemList';
import SideMenu from "../../components/SideMenu/SideMenu";

const Post: React.FC = () => {
    const [current, setCurrent] = useState(null);
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
            <SideMenu/>
            <IonContent color={"light"}>
                <IonCard color={"secondary"}>
                    <IonCardTitle>Post</IonCardTitle>
                    <IonButton  color ="primary" onClick={disconnect}>Deconnection</IonButton>
                </IonCard>
                <IonCard>
                    <IonButton routerLink="/post/newPost" id="new-post" color ="primary">Nouveau post</IonButton>
                    <IonButton routerLink="/post" color ="primary" onClick={tt}>Recharger</IonButton>
                    <ItemList doEdit={setCurrent}/>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Post;
