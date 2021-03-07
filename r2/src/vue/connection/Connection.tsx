import {IonPage, IonContent} from "@ionic/react";
import React from "react";
import './Connection.css';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Connection: React.FC = () => {
    return (
        <IonPage>
            <Header/>
            <IonContent/>
            <Footer/>
        </IonPage>
    );
};

export default Connection;
