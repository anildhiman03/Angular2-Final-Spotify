import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArtistComponent }   from './artist.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [],
    declarations: [ArtistComponent],
    providers: [],
})
export class ArtistModule { }
