import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class LayoutComponent {

}
