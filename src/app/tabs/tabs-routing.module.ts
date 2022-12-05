import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'myMatches',
        loadChildren: () => import('../player/my-matches/my-matches.module').then(m => m.MyMatchesPageModule)
      },
     /*  {
        path: 'wallet',
        loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletPageModule)
      }, */
      {
        // change
        path: 'messages',
        loadChildren: () => import('../other/message/message.module').then(m => m.MessagePageModule)
        //loadChildren: () => import('../knockout/knockout.module').then(m => m.KnockOutPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../player/account/account.module').then(m => m.AccountPageModule)
      },

       {
        path: 'myTournaments',
        loadChildren: () => import('../player/my-tournaments/my-tournaments.module').then(m => m.MyTournamentsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
