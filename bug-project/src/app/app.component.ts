import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'bug-project';
  showDiagram = false;

  onToggleDiagram() {
    console.warn("toggling!");
    this.showDiagram = !this.showDiagram;
  }
}
