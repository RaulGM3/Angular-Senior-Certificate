import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'architecture',
    loadComponent: () => import('./architecture/architecture.component').then(m => m.ArchitectureComponent)
  },
  {
    path: 'dependency-injection',
    loadComponent: () => import('./dependency-injection/dependency-injection.component').then(m => m.DependencyInjectionComponent)
  },
  {
    path: 'advanced-components',
    loadComponent: () => import('./advanced-components/advanced-components.component').then(m => m.AdvancedComponentsComponent)
  },
  {
    path: 'intermediate-components',
    loadComponent: () => import('./intermediate-components/intermediate-components.component').then(m => m.IntermediateComponentsComponent)
  },
  {
    path: 'signals',
    loadComponent: () => import('./signals/signals.component').then(m => m.SignalsComponent)
  },
  {
    path: 'ng-modules',
    loadComponent: () => import('./ng-modules/ng-modules.component').then(m => m.NgModulesComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
