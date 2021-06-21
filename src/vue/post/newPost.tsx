import {IonPage, IonContent, IonInput, IonButton, IonCard, IonCardTitle, IonTextarea, IonCardSubtitle} from "@ionic/react";
import React, { useState } from "react";
import './Post.css';
import {sendPostToDB} from '../../firebaseConf'


const NewPost: React.FC = () => {
    const [text,setText] = useState('')
    const [title,setTitle] = useState('')

    async function sendPost() {
        console.log("sendPostToDB")
        console.log(title)
        sendPostToDB(title,text)
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
                    <IonButton onClick={sendPost} color ="primary">Envoyer {'\u2B06'}</IonButton>
                    <IonButton routerLink="/Post" color ="primary">Retour {'\u21B5'}</IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default NewPost;
