import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/victor',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'acercade',
    loadComponent: () => import('./pages/acercade/acercade.page').then( m => m.AcercadePage)
  },
  {
    path: 'acercade',
    loadComponent: () => import('./pages/acercade/acercade.page').then( m => m.AcercadePage)
  },
  {
    path: 'consulta',
    loadComponent: () => import('./pages/consulta/consulta.page').then( m => m.ConsultaPage)
  },
  {
    path: 'busqueda',
    loadComponent: () => import('./pages/busqueda/busqueda.page').then( m => m.BusquedaPage)
  },
];
