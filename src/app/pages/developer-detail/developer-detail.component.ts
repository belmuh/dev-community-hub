import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Developer } from 'src/app/models/developer.model';
import { DeveloperService } from 'src/app/services/developer.service';

@Component({
  selector: 'developer-detail',
  templateUrl: './developer-detail.component.html',
  styleUrls: ['./developer-detail.component.css']
})
export class DeveloperDetailComponent{
  @Input() developer!: Developer | null;
  @Output() back = new EventEmitter<void>();

  goBack() {
    this.back.emit();
  }
  getYoutubeThumbnail(url: string): string {
    let videoId = '';

    // 1. Youtube uzun URL formu: v=VIDEO_ID
    const longUrlMatch = url.match(/v=([a-zA-Z0-9_-]+)/);
  
    // 2. Youtube kısa URL formu: youtu.be/VIDEO_ID
    const shortUrlMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  
    if (longUrlMatch) {
      videoId = longUrlMatch[1];
    } else if (shortUrlMatch) {
      videoId = shortUrlMatch[1];
    }
  
    if (!videoId) {
      return '';  // videoId bulunamadıysa boş dön veya varsayılan resim ver
    }
  
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }
}
