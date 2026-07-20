import { Route } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PrivacyComponent } from './privacy/privacy.component';


            
export const HOME_ROUTES: Route[] = [
    { path: "", component: LandingpageComponent },
    { path: "privacy", component: PrivacyComponent}
    
  ];