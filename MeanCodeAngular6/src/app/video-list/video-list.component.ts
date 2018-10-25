import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// import { EventEmitter } from 'events';

import { Video } from '../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
 @Input() videos: any;
@Output() SelectVideo = new EventEmitter();

    constructor() { }

  ngOnInit() {
  }
  onSelect(vid: Video) {
    console.log(vid);
   this.SelectVideo.emit(vid);
  }

}
