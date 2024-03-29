import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider, stepper, transformer } from './route-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // <-- add your animations here
    fader,
    slider,
    transformer,
    stepper,
  ],
})
export class AppComponent {
  title = 'client';

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
