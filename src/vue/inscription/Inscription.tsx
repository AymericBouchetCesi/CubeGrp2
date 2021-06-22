import {IonContent, IonInput, IonButton, IonCard, IonCardTitle} from "@ionic/react";
import React, { useState } from "react";
import './Inscription.css';
import {registerViaMail} from '../../firebaseConf'
import { myToast } from "../../toast";
import SplitPane from "../../components/SplitPane/SplitPane";

const Inscription: React.FC = () => {
    const [userMail,setUserMail] = useState('')
    const [password,setPassword] = useState('')
    const [cfPassword,setcfPassword] = useState('')
    async function register() {
        console.log(userMail, password)

        if(password!==cfPassword)
        {
            myToast("Mot de passe différent",2000,"danger")
        }
        else
        {
            if(userMail.trim() === '' || password.trim() === ''){
                return myToast('Veuillez remplir le email et mot de passe',2000,'danger')
            }
            else
            {
                const res = await registerViaMail(userMail,password)
                console.log(`${res ?'Login valide' : 'Erreur de login'}`)
                if(res === 1) {
                    myToast("Erreur de d'inscription",2000,"danger")
                }else if(res === 2)
                {
                    myToast("Email déjà utilisé",2000,"success")
                }
                else
                {
                    myToast("Incription réussi",2000,"success")
                    window.location.href = "/Connection"
                }
            }
        }
    }


    return (
        <SplitPane main={
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
                    <IonButton color ="primary"  onClick={register}>Inscription </IonButton>
                </IonCard>

                <IonCard>
                    <IonButton routerLink="/Connection" color ="primary">Connection</IonButton>
                </IonCard>
            </IonContent>
        }/>
    );
};

export default Inscription;
