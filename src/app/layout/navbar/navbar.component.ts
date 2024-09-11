import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ToolbarModule} from "primeng/toolbar";
import {MenuModule} from "primeng/menu";
import {CategoryComponent} from "../category/category.component";
import {AvatarComponent} from "./avatar/avatar.component";
import {DialogService} from "primeng/dynamicdialog";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenuModule,
    CategoryComponent,
    AvatarComponent
  ],
  providers: [DialogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  location: string = "Anywhere";
  guests: string = "Add Guests";
  dates: string = "Add Week";
  currentMenuItems: MenuItem[] | undefined = []


  ngOnInit(): void {
  }

  // login() => this.authService.login();
  // logout() => this.authService.logout();

  private fetchMenu() {
    return [
      {
        label: "Sign Up",
        styleClass: "font-bold"
      },
      {
        label: "Login",
        styleClass: "font-bold"
      }
    ]
  }

}
