import { Routes } from '@angular/router';
import { CatsPage } from './pages/cats/cats.component';
import { DogsPage } from './pages/dogs/dogs.component';
import { FoxesPage } from './pages/foxes/foxes.component';

export const routes: Routes = [
    {
        path: "cats",
        component: CatsPage,
        title: "Cats"
    },
    {
        path: "dogs",
        component: DogsPage,
        title: "Dogs"
    },
    {
        path: "foxes",
        component: FoxesPage,
        title: "Foxes"
    }
];
