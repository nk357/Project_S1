import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Make it standalone
  imports: [RouterModule], // ✅ Import RouterModule so <router-outlet> works
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sahayak';
}
