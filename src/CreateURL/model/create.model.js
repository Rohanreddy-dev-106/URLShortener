
export default class CreateURL {
  BaseURL;
  ShortURL;
  Clickcount;
  constructor(url, shorturl, click) {
    this.BaseURL = url;
    this.ShortURL = shorturl;
    this.Clickcount = click;
  }
}
