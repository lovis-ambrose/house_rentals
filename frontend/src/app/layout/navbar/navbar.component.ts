import {Component, inject, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ToolbarModule} from "primeng/toolbar";
import {MenuModule} from "primeng/menu";
import {CategoryComponent} from "../category/category.component";
import {AvatarComponent} from "./avatar/avatar.component";
import {DialogService} from "primeng/dynamicdialog";
import {MenuItem} from "primeng/api";
import {ToastService} from "../toast.service";

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
  // connectedUser: User = {email: this.authService.notConnected};

  toastService = inject(ToastService);
  // authService = inject(AuthService);
  dialogService = inject(DialogService);
  // activatedRoute = inject(ActivatedRoute);
  // ref: DynamicDialogRef | undefined;


  ngOnInit(): void {
    this.authService.fetch(false);
    // this.extractInformationForSearch();
  }

  // login() => this.authService.login();
  // logout() => this.authService.logout();
  authService: any;
  connectedUser: string | undefined;

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

  openNewSearch() {

  }

  openNewListing() {

  }
}
