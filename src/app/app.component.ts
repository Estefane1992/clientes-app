import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./template/navbar/navbar.component";
import { SidebarComponent } from "./template/sidebar/sidebar.component";

import jQuery from 'jquery';
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent, HomeComponent]
})

export class AppComponent implements AfterViewInit {
  title = 'Cliente-App';

  ngAfterViewInit() {
    (function ($) {
      "use strict";
      var path = window.location.href;

      $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
        // 'this' aqui refere-se ao elemento atual no loop
        // Converter 'this' para um HTMLAnchorElement
        let element = this as HTMLAnchorElement;

        if (element.href === path) {
          $(element).addClass("active");
        }
      });

      // Toggle the side navigation
      $("#sidebarToggle").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }
}



