import { GENTECKPage } from './app.po';

describe('genteck App', () => {
  let page: GENTECKPage;

  beforeEach(() => {
    page = new GENTECKPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
