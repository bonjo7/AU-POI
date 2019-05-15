import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        route: ['', 'poi'],
        name: 'Poi',
        moduleId: PLATFORM.moduleName('views/poi'),
        nav: true,
        title: 'POI'
      }
    ]);
    this.router = router;
  }
}
