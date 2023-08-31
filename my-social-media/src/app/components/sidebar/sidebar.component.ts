import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { TokenDecodeModel } from 'src/app/models/token-decode.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  tokenDecode: TokenDecodeModel = new TokenDecodeModel();
constructor(
  public auth:AuthService
){
  this.tokenDecode = this.auth.tokenDecode;
}
}
