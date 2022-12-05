import { Component, Inject} from '@angular/core';
import { NavController, Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/models/contants.models';
import { MyEvent } from 'src/services/myevent.services';
import { APP_CONFIG, AppConfig } from './app.config';
import { VtPopupPage } from './statics/vt-popup/vt-popup.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rtlSide = "left";

   constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, private navCtrl: NavController,
    private modalController: ModalController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router,
    private translate: TranslateService, private myEvent: MyEvent) {
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });
  }

 initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("fr");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'ar': {
        this.rtlSide = "rtl";
        break;
      }
      default: {
        this.rtlSide = "ltr";
        break;
      }
    }
  }

  ngOnInit() {


   if (this.config.demoMode) {
    setTimeout(() => {
      this.language();
    }, 1000);

     setTimeout(() => {
       this.presentModal();
     }, 15000)
   }
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: VtPopupPage,
    });
    return await modal.present();
  }

  language() {
    this.route.navigate(['./language']);
 }
}
