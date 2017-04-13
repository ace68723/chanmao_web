import { ChanmaoWebPage } from './app.po';

describe('chanmao-web App', () => {
  let page: ChanmaoWebPage;

  beforeEach(() => {
    page = new ChanmaoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
