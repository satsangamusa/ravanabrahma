import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {
  }
  public getYoutubeUrl(url: any) {
    return '//www.youtube.com/embed/' + url;
  }
  public menuType:any="telugu";
  public home:any="Home";
  public language="భాషను ఎన్నుకోండి"; 
  public languageGate="lg";
  pages: Array<{ title: string, component: any }>;
  fontSize: number = 15;
  startPage: number = 0;
  endPage: number = 0;
  currentPage: number = 0;
  fontColor: any;
  bgColor: any;
  navigationFrom: any = null;
  mainItem = 0;
  selectedItem = 0;
  subItem = 0;
  networkStatus: any = "OFFLINE";
  menu: any = [
  ];
}
