import {
    IonContent,
    useIonViewWillEnter,
    IonPage,
    IonCard,
    IonInfiniteScroll, IonInfiniteScrollContent,
} from '@ionic/react';
import React, {useState} from 'react';
import './Home.css';
import SplitPane from "../../components/SplitPane/SplitPane";

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
        <SplitPane main={
            <div>
                {items.map((item: string, i: number) => {
                    return <IonCard key={`${i}`}><img src={item} alt="dogo"/></IonCard>
                })}

                <IonInfiniteScroll threshold="200%" disabled={disableInfiniteScroll}
                                   onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}>
                    <IonInfiniteScrollContent/>
                </IonInfiniteScroll>
            </div>
        }>

        </SplitPane>

    );
};

export default Home;
