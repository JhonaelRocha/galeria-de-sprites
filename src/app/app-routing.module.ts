import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SpritesComponent } from './pages/sprites/sprites.component';
import { MusicasComponent } from './pages/musicas/musicas.component';

const routes: Routes = [
    {
        path: '' ,
        component: HomeComponent
    },
    {
        path: 'sprites',
        component: SpritesComponent
    },
    {
        path: 'musicas',
        component: MusicasComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
