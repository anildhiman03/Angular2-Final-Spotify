import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent }   from './search.component';
import { SpotifyService } from '../../services/spotify.service'

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpModule,
        RouterModule
    ],
    exports: [],
    declarations: [SearchComponent],
    providers: [SpotifyService]
})
export class SearchModule { }