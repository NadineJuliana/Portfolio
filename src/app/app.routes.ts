import { Routes } from '@angular/router';
import { HomePage } from './layout/page/home/home-page/home-page';
import { ImprintPage } from './features/imprint/imprint-page/imprint-page';
import { PrivacypolicyPage } from './features/privacy/privacypolicy-page/privacypolicy-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'imprint',
    component: ImprintPage,
  },
  {
    path: 'privacy-policy',
    component: PrivacypolicyPage,
  },
];
