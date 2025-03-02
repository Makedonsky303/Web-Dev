import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../services/albums.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  standalone:true,
  selector: 'app-album-detail',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})

export class AlbumDetailComponent {
  album:any = {};

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ){}

  // ngOnInit():void{
  //   const albumId = this.route.snapshot.paramMap.get('id');
  //   if(albumId) {
  //       this.albumsService.getAlbumById(+albumId).subscribe(data => {
  //       this.album = data;
  //     })
  //   }
  // }
  // ngOnInit(): void {
  //   const albumId = this.route.snapshot.paramMap.get('id');
  
  //   if (albumId) {
  //     const savedAlbum = localStorage.getItem(`album-${albumId}`);
  
  //     if (savedAlbum) {
  //       this.album = JSON.parse(savedAlbum);
  //     } else {
  //       this.albumsService.getAlbumById(+albumId).subscribe(data => {
  //         this.album = data;
  //       });
  //     }
  //   }
  // }

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');
  
    if (albumId) {
      const savedAlbums = localStorage.getItem('albums');
  
      if (savedAlbums) {
        const albums: any[] = JSON.parse(savedAlbums);
        this.album = albums.find(album => album.id === +albumId) || null;
      }
  
      if (!this.album) {
        this.albumsService.getAlbumById(+albumId).subscribe(data => {
          this.album = data;
        });
      }
    }
  }
  
  
  

  // saveAlbum(): void {
  //   this.albumsService.updateAlbum(this.album.id, this.album).subscribe(response => {
  //     console.log('Updated Album:', response); 
  //     alert('Album updated successfully!'); 

  //     localStorage.setItem(`album-${this.album.id}`, JSON.stringify(this.album));
  
      
  //   }, error => {
  //     console.error('Error updating album:', error);
  //     alert('Failed to update album!');
  //   });
  // }
  saveAlbum(): void {
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe(response => {
      console.log('Updated Album:', response);
      alert('Album updated successfully!');
  
      // Retrieve the existing albums from localStorage
      const savedAlbums = localStorage.getItem('albums');
      let albums: any[] = savedAlbums ? JSON.parse(savedAlbums) : [];
  
      // Find the index of the album to update
      const index = albums.findIndex(album => album.id === this.album.id);
  
      if (index !== -1) {
        albums[index] = this.album; // Update the existing album
      } else {
        albums.push(this.album); // If not found, add as a new album (fallback)
      }
  
      // Save the updated array back to localStorage
      localStorage.setItem('albums', JSON.stringify(albums));
  
    }, error => {
      console.error('Error updating album:', error);
      alert('Failed to update album!');
    });
  }
  
  

  goBack(): void {
    window.history.back();
  }
}
