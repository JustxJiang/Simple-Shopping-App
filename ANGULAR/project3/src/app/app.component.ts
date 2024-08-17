import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project3';
  imageUrl = 'assets/images/screwbar.png'
}
