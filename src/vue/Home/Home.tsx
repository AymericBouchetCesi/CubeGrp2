import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonCard,
    IonToolbar, useIonViewWillEnter,
    IonInfiniteScroll, IonInfiniteScrollContent
} from '@ionic/react';
import React, {useState} from 'react';
import './Home.css';

const Home: React.FC = () => {

    const [items, setItems] = useState<string[]>([]);

    const [disableInfiniteScroll, setDisableInfiniteScroll] = useState<boolean>(false);

    async function fetchData() {
        const url: string = 'https://dog.ceo/api/breeds/image/random/10';

        const res: Response = await fetch(url);
        res
            .json()
            .then(async (res) => {
                if (res && res.message && res.message.length > 0) {
                    setItems([...items, ...res.message]);
                    setDisableInfiniteScroll(res.message.length < 10);
                } else {
                    setDisableInfiniteScroll(true);
                }
            })
            .catch(err => console.error(err));
    }

    useIonViewWillEnter(async () => {
        await fetchData();
    });

    async function searchNext($event: CustomEvent<void>) {
        await fetchData();

        ($event.target as HTMLIonInfiniteScrollElement).complete();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {items.map((item: string, i: number) => {
                    return <IonCard key={`${i}`}><img src={item}/></IonCard>
                })}

                <IonInfiniteScroll threshold="200%" disabled={disableInfiniteScroll}
                                   onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}>
                    <IonInfiniteScrollContent/>
                </IonInfiniteScroll>
            </IonContent>
        </IonPage>
    );
};

export default Home;
