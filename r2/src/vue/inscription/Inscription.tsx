import {IonPage, IonContent, IonInput, IonButton, IonIcon, IonCard, IonCardTitle, IonCheckbox} from "@ionic/react";
import React, { useState } from "react";
import './Inscription.css';

const Inscription: React.FC = () => {
    const [input,setInput] = useState<string>('')
    return (
        <IonPage>
            <IonContent color={"light"}>
                <IonCard color={"secondary"}>
                    <IonCardTitle>Connection</IonCardTitle>
                    <IonInput value={input} type="email">Mail</IonInput> 
                    <IonInput value={input} type="password">Mot de passe
                    </IonInput>
                    <IonCheckbox>
                            <IonIcon name="eye-outline"></IonIcon>
                    </IonCheckbox>
                    <IonButton color ="primary">Connection </IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Inscription;
