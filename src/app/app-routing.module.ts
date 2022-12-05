import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./auth/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./auth/verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contests',
    loadChildren: () => import('./matches/contests/contests.module').then( m => m.ContestsPageModule)
  },
   {
      path: 'player-info',
      loadChildren: () => import('./player/player-info/player-info.module').then( m => m.PlayerInfoPageModule)
    },
    {
        path: 'my-matches',
        loadChildren: () => import('./player/my-matches/my-matches.module').then( m => m.MyMatchesPageModule)
      },
       {
        path: 'my-tournaments',
        loadChildren: () => import('./player/my-tournaments/my-tournaments.module').then( m => m.MyTournamentsPageModule)
      },
      {
        path: 'player-performance',
        loadChildren: () => import('./player/player-performance/player-performance.module').then( m => m.PlayerPerformancePageModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('./player/wallet/wallet.module').then( m => m.WalletPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./player/account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'my-profile',
        loadChildren: () => import('./player/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
      },
      {
        path: 'my-team',
        loadChildren: () => import ('./player/my-team/my-team.module').then( m => m.MyTeamPageModule)

      },
      {
          path: 'my-points',
          loadChildren: () => import('./player/my-points/my-points.module').then( m => m.MyPointsPageModule)
        },

  {
    path: 'create-new-team',
    loadChildren: () => import('./team/create-new-team/create-new-team.module').then( m => m.CreateNewTeamPageModule)
  },

  {
    path: 'team-preview',
    loadChildren: () => import('./team/team-preview/team-preview.module').then( m => m.TeamPreviewPageModule)
  },
  {
    path: 'choose-captain',
    loadChildren: () => import('./team/choose-captain/choose-captain.module').then( m => m.ChooseCaptainPageModule)
  },

  {
      path: 'edit-team',
      loadChildren: () => import('./team/edit-team/edit-team.module').then( m => m.EditTeamPageModule)
    },
    {
      path: 'upcoming-match-info',
      loadChildren: () => import('./matches/upcoming-match-info/upcoming-match-info.module').then( m => m.UpcomingMatchInfoPageModule)
    },
    {
      path: 'live-match-info',
      loadChildren: () => import('./matches/live-match-info/live-match-info.module').then( m => m.LiveMatchInfoPageModule)
    },
    {
      path: 'completed-match-info',
      loadChildren: () => import('./matches/completed-match-info/completed-match-info.module').then( m => m.CompletedMatchInfoPageModule)
    },
    {
      path: 'result-match-info',
      loadChildren: () => import('./matches/result-match-info/result-match-info.module').then( m => m.ResultMatchInfoPageModule)
    },

     {
            path: 'tournament',
            loadChildren: () => import('./matches/bet-game-invitation/bet-game-invitation.module').then( m => m.BetGameInvitationPageModule)
          },

    {
        path: 'tournament-matches',
        loadChildren: () => import('./tournaments/tournament-round/tournament-round.module').then( m => m.TournamentRoundPageModule)
      },
      {
        path: 'knockout',
        loadChildren: () => import('./tournaments/knockout/knockout.module').then( m => m.KnockOutPageModule)
      },


  {
    path: 'privacy-policy',
    loadChildren: () => import('./statics/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./statics/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./statics/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./statics/faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./statics/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./statics/vt-popup/vt-popup.module').then( m => m.VtPopupPageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./statics/buyappalert/buyappalert.module').then( m => m.BuyappalertPageModule)
  },
  {
    path: 'country-code',
    loadChildren: () => import('./statics/country-code/country-code.module').then( m => m.CountryCodePageModule)
  },

  {
    path: 'message',
    loadChildren: () => import('./other/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./other/shop/shop.module').then( m => m.ShopPageModule)
  },

   {
      path: 'reminder',
      loadChildren: () => import('./other/reminder/reminder.module').then( m => m.ReminderPageModule)
    },

    {
      path: 'my-stat',
      loadChildren: () => import ('./other/stats/stats.module').then( m => m.StatsPageModule)

    },
    {
        path: 'leaderboard',
        loadChildren: () => import('./other/leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
      },
      
  {
    path: 'result-match-info',
    loadChildren: () => import('./matches/result-match-info/result-match-info.module').then( m => m.ResultMatchInfoPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
