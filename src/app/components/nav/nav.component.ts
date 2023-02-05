import { Component } from '@angular/core';
import { faListCheck, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  brandIcon = faListCheck;
  userIcon = faUser;

}
