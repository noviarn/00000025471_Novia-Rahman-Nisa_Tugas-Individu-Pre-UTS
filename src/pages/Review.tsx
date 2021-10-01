import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle } from '@ionic/react';

const Review: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense" className="ion-no-border ion-padding">
          <IonToolbar>
            <IonTitle size="large">Review</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
              <IonCol>
                <IonCard color="secondary">
                  <IonCardContent className="ion-text-center">
                    <IonCardTitle>Singapore</IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol>
                <IonCard color="secondary">
                  <IonCardContent className="ion-text-center">
                    <IonCardTitle>Paris</IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Review;