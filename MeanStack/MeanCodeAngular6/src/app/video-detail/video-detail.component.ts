import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],

})
export class VideoDetailComponent implements OnInit {
  @Input() video;
  @Output() updateVideoEvent = new EventEmitter();
  @Output() deleteVideoEvent = new EventEmitter();
  public editTitle = false;
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }
  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo() {
    console.log(this.video);
    this.deleteVideoEvent.emit(this.video);
  }

}
