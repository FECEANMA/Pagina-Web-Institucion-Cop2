import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { DescriptionComponent } from './description/description.component';
import { FinallyComponent } from './finally/finally.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,PanelComponent,HomeComponent,DescriptionComponent,FinallyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
