import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet], // ← ce bloc est essentiel !
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
