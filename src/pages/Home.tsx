import React, {useContext, useEffect} from 'react';
import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonModal} from '@ionic/react';
import './Home.css';
import {MyProviderContext} from "../MyProvider";

export const Home: React.FC = () => {
    const {data} = useContext(MyProviderContext);
    const [present] = useIonModal(MyModal);

    useEffect(() => {
        console.log('Home component consumed data', data);
    }, [data]);


    const openModal = () => {
        present(modalOptions);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonButton onClick={openModal}>Open Modal</IonButton>
            </IonContent>
        </IonPage>
    );
};

export const MyModal: React.FC = () => {
    const {data} = useContext(MyProviderContext);
    console.log('modal consumed context data', data);
    return (
        <div>

        </div>
    );
};


const modalOptions = {
    breakpoints: [0, 0.5],
    initialBreakpoint: 0.5,
    backdropBreakpoint: 0.2,
    cssClass: 'rounded-modal',
    backdropDismiss: true,
    keepContentsMounted: true,
};
