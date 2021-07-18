import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuList: any;
  currentUrl: string = '';
  constructor(private router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event:any) => {
        this.currentUrl = event.url;
      });
  }

  ngOnInit(): void {
    this.menuList = [
      {
        name: 'Home',
        url: 'public/home',
      },
      {
        name: 'Contact',
        url: 'public/contactus',
      },
      {
        name: 'Blogs',
        url: 'public/blogs',
      },
    ];
  }
}
