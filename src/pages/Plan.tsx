import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Plan: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense" className="ion-no-border ion-padding">
          <IonToolbar>
            <IonTitle size="large">Plan</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Plan;