
export default class CreateURL {
  BaseURL;
  ShortURL;
  Clickcount;
  CreatedTime;
  constructor(url, shorturl, click,Time) {
    this.BaseURL = url;
    this.ShortURL = shorturl;
    this.Clickcount = click;
    this.CreatedTime=Time;
  }
}
