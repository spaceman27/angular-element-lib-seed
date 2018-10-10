import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  links: any[];
  constructor(private quoteService: QuoteService) { 
    this.links = [
      {
        navText: "DASHBOARD",
        icon: { 
          mat: "apps",
          fontawesome: null,
          url: null
        },
        href: null,
        routerLink: "/home",
        routerLinkActive: "active"
      },
      {
        
        navText: "CHECKIN",
        icon: { 
          mat: "location_on",
          fontawesome: null,
          url: null
        },
        href: 'http://google.com',
        routerLink: null,
        routerLinkActive: null
      },
      {
        navText: "SETTINGS",
        icon: { 
          mat: "settings",
          fontawesome: null,
          url: null
        },
        href: null,
        routerLink: "/home",
        routerLinkActive: null
      }
    ]
  }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }

}
