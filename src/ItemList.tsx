import React from 'react';
import Item from './Item';
import firebase from 'firebase';
import {useCollection} from "react-firebase-hooks/firestore";
import {IonList} from '@ionic/react';

interface Props {
    doEdit:any
}

const ItemList: React.FC<Props> = ({doEdit}) => {
    const [value, loading] = useCollection(
        firebase.firestore().collectionGroup("Posts"),
        {
            snapshotListenOptions:{includeMetadataChanges:true}
        }
    );
    const closeSlidingItems = () => {
        // let list = document.getElementById("list") as any;
    };

    return (
        <IonList id="list">
            {value && value.docs.map(doc => {
                return (
                    !loading && (
                        <Item doc={doc}
                        doEdit = {(i : any) => {
                        closeSlidingItems();
                        doEdit(i);
                        }}
                        doDelete = {(i : any)  => {
                            closeSlidingItems();
                        }}
                        key = {doc.id}
                        />
                    )
                );
            })}
        </IonList>
    );
}
export default ItemList;
