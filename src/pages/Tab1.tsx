import {
    IonButton,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {useState} from "react";
import axios from "axios";


const Tab1: React.FC = () => {
    const [joke,setJokes]= useState()

    function changeJokes(){
        axios.get("https://api.chucknorris.io/jokes/random")
            .then((response)=>{
                setJokes(response.data.value)
                console.log(response.data.value)
            })
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>jokes</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonButton onClick={changeJokes} className="btn btn-success">Change jokes</IonButton>
            <br/>
            <IonList>
                <IonItem>
                    <IonLabel>{joke}</IonLabel>
                </IonItem>
            </IonList>
        </IonContent>
    </IonPage>
  );
};

export default Tab1;
