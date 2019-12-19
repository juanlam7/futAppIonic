import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Iniciar Sesión',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Liga Santander',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Premier League',
      url: '/home',
      icon: 'list'
    },
    {
      title: 'Serie A',
      url: '/home',
      icon: 'list'
    },
    {
      title: 'Bundesliga',
      url: '/home',
      icon: 'list'
    },
    {
      title: 'Ligue 1',
      url: '/home',
      icon: 'list'
    },
    {
      title: 'Eredivisie',
      url: '/home',
      icon: 'list'
    },
    {
      title: 'Primeira Liga',
      url: '/home',
      icon: 'list'
    },
    {
      title: 'Primera División de Venezuela',
      url: '/home',
      icon: 'list'
    },
    {
      title: 'Mi cuenta',
      url: '/home',
      icon: 'contact'
    },
    {
      title: 'Cerrar sesión',
      url: '/home',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
