import {IonPage, IonContent, IonInput, IonButton, IonIcon, IonCard, IonCardTitle, IonCheckbox, IonTextarea, IonCardSubtitle} from "@ionic/react";
import React, { useEffect, useState } from "react";
import './Post.css';
import { myToast } from "../../toast";
import {sendPostToDB} from '../../firebaseConf'


const NewPost: React.FC = () => {
    const [text,setText] = useState('')
    const [title,setTitle] = useState('')

    

    async function sendPost() {
        console.log("sendPostToDB")
        sendPostToDB(title,text)
        window.location.href="/Post"
    }
    return (
        <IonPage>
            <IonContent color={"light"}>
                <IonCard color={"secondary"}>
                    <IonCardTitle>Nouveau post</IonCardTitle>
                    <IonCard color={"light"}><IonInput onIonChange={(e: any) => setTitle(e.target.value)}>
                        <IonCardSubtitle>Titre : </IonCardSubtitle>
                        </IonInput></IonCard> 
                    <IonCard color={"light"}>
                    <IonCardSubtitle>Contenu : </IonCardSubtitle>
                        <IonTextarea onIonChange={(e: any) => setText(e.target.value)}>  
                        </IonTextarea>
                    </IonCard>
                    <IonButton  size="large" shape="round">+</IonButton>
                </IonCard>
                <IonCard>
                    <IonButton  onClick={sendPost} color ="primary">Envoyer {'\u2B06'}</IonButton>
                    <IonButton routerLink="/Post" color ="primary">Retour {'\u21B5'}</IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default NewPost;
