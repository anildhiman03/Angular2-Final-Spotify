import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Artist } from '../../models/artist';
import { Album } from '../../models/album';
import { SpotifyService } from '../../services/spotify.service';


@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {
    id :string;
    artist:Artist[];
    albums:Album[];

    constructor(
        private _spotifyService:SpotifyService, 
        private _route:ActivatedRoute
    ) { }

    ngOnInit() {
        this._route.params
        .map(params => params['id'])
        .subscribe((id)=>{
            this._spotifyService.getArtist(id)
            .subscribe(
                artist=> {
                    console.log("all artist \n ",artist);
                    this.artist = artist;
                });
            this._spotifyService.getAlbums(id)
            .subscribe( albums => {
                console.log("all albums \n ",albums);
                this.albums = albums.items;
            })
        })
    }
}