import { IonContent, IonHeader, IonPage, IonTitle, IonList, IonItem, IonLabel, IonToggle, IonToolbar, IonIcon, IonGrid, IonSegment, IonSegmentButton, IonButton, IonCard, IonCardContent } from '@ionic/react';
import { bedOutline, ticketOutline, restaurantOutline, chatbubbleOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {

  const toggleDarkModeHandler = () => document.body.classList.toggle('dark');

  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding">
        <IonToolbar>
          <IonTitle>Explore</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid className="explorer" fixed>
          <IonCard color="warning">
            <IonCardContent>
              <IonSegment scrollable>
            <IonSegmentButton value="hotels">
              <IonButton shape="round" expand="block" color="light"><IonIcon icon={bedOutline} />Hotels</IonButton>
            </IonSegmentButton>
            <IonSegmentButton value="thingstodo">
               <IonButton shape="round" expand="block" color="light"><IonIcon icon={ticketOutline} />Things to do</IonButton>
            </IonSegmentButton>
            <IonSegmentButton value="restaurants">
              <IonButton shape="round" color="light"><IonIcon icon={restaurantOutline} />Restaurants</IonButton>
            </IonSegmentButton>
            <IonSegmentButton value="forums">
              <IonButton shape="round" color="light"><IonIcon icon={chatbubbleOutline} />Forums</IonButton>
            </IonSegmentButton>
          </IonSegment>
            </IonCardContent>
          </IonCard>
        </IonGrid>
        <IonList>
          <IonItem lines="none">
            <IonIcon slot="start" />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler} />
          </IonItem>
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
