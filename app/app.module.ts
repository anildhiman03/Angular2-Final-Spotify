import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AboutComponent }  from './components/about/about.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { SearchModule } from './components/search/search.module';
import { ArtistModule } from './components/artist/artist.module';
import { AlbumModule } from './components/album/album.module';

import { routing } from './app.routing' 


@NgModule({
  imports:      [ 
    BrowserModule,
    routing,
    SearchModule,
    ArtistModule,
    AlbumModule
  ],
  declarations: [ 
    AppComponent,
    NavbarComponent,
    AboutComponent 
    ],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }
