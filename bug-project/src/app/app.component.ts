import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'bug-project';
  showDiagram = false;
  showNoLeakComponent = false;

  onToggleDiagram() {
    this.showDiagram = !this.showDiagram;
  }

  onToggleNoLeakComponent() {
    this.showNoLeakComponent = !this.showNoLeakComponent;
  }
}
