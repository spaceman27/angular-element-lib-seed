import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sitamat-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 links: any[];
  constructor() {
    this.links = [
      {
        navText: 'DASHBOARD',
        icon: {
          mat: 'apps',
          fontawesome: null,
          url: null
        },
        href: null,
        routerLink: '/home',
        routerLinkActive: 'active'
      },
      {
        navText: 'CHECKIN',
        icon: {
          mat: 'location_on',
          fontawesome: null,
          url: null
        },
        href: 'http://google.com',
        routerLink: null,
        routerLinkActive: null
      },
      {
        navText: 'SETTINGS',
        icon: {
          mat: 'settings',
          fontawesome: null,
          url: null
        },
        href: null,
        routerLink: '/home',
        routerLinkActive: null
      }
    ];
  }

  ngOnInit() {
  }

}
