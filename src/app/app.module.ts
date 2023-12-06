import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SpriteCardComponent } from './components/sprite-card/sprite-card.component';
import { HomeComponent } from './pages/home/home.component';
import { SpritesComponent } from './pages/sprites/sprites.component';
import { MusicasComponent } from './pages/musicas/musicas.component';
import { MusicaCardComponent } from './components/musica-card/musica-card.component';
import { NewsCardComponent } from './components/news-card/news-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SpriteCardComponent,
    HomeComponent,
    SpritesComponent,
    MusicasComponent,
    MusicaCardComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
