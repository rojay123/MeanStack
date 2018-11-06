import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Video } from './video';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _getUrl = 'http://localhost:3000/api/videos';
  private _postUrl = 'http://localhost:3000/api/video';
  private _putUrl = 'http://localhost:3000/api/video/';
  private _delUrl = 'http://localhost:3000/api/video/';
  constructor(private _http: HttpClient) { }

  getVideos (): Observable<Video[]> {
    console.log(this._getUrl);
    return this._http.get<Video[]>(this._getUrl);
  }
  // add Video method
  addVideo(newVideo: Video) {
    console.log(newVideo);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    const options = {
      headers: httpHeaders
    };
    return this._http.post(
      this._postUrl,
      JSON.stringify(newVideo), options);
  }

  updateVideo(video: Video) {
    console.log();
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    const options = {
      headers: httpHeaders
    };
    return this._http.put(
      this._putUrl + video._id,
      JSON.stringify(video), options);
  }

  deleteVideo(video: Video) {
    return this._http.delete(this._delUrl + video._id);
  }
}
