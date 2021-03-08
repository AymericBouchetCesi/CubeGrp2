import React from 'react';
import {IonItem, IonLabel, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonIcon, IonImg} from '@ionic/react';
import {document, trash} from 'ionicons/icons';

interface Props {
    doEdit:any,
    doDelete:any,
    doc:any
}

const Item: React.FC<Props> = ({doEdit,doDelete,doc}) => {
    let data = doc.data();

    return (
        <IonItemSliding>
            <IonItem>
                <IonLabel class="ion-text-wrap">
                    <IonText className="item-title">
                        <div>
                            {data.Titre}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {data.Message}
                        </div>
                    </IonText>
                    
                </IonLabel>
            </IonItem>
            <IonItemOptions>
                <IonItemOption onClick={()=>{
                    doEdit(doc.id);
                    }}>
                    <IonIcon slot="icon-only" icon={document}></IonIcon>
                </IonItemOption>

                <IonItemOption onClick={()=> {
                    doDelete(doc.id);
                    }}>
                    <IonIcon slot="icon-only" icon={trash}></IonIcon>

                </IonItemOption>
            </IonItemOptions>

        </IonItemSliding>
    )
}
export default Item;
