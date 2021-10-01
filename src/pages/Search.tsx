import {useRef, useState} from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle } from '@ionic/react';
import './Search.css';

const Search: React.FC = () => {
	const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
    	<IonHeader className="ion-no-border ion-padding">
        <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
          <IonToolbar>
           <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Where to?"></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      	<IonGrid>
        	<IonRow>
        		<IonCol>
	              <IonCard color="success">
	                <IonCardContent className="ion-text-center">
	                  <IonCardTitle>See what's good nearby.</IonCardTitle>
	                </IonCardContent>
	              </IonCard>
	            </IonCol>
        	</IonRow>
        	<h4>Destinations travelers love</h4>
        	<IonRow>
        		<IonCol>
	              <IonCard color="secondary">
	                <IonCardContent className="ion-text-center">
	                  <IonCardTitle>New York</IonCardTitle>
	                </IonCardContent>
	              </IonCard>
	            </IonCol>
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
	                  <IonCardTitle>Rome</IonCardTitle>
	                </IonCardContent>
	              </IonCard>
	            </IonCol>
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

export default Search;