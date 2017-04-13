import { TestitPage } from './app.po';

describe('testit App', () => {
  let page: TestitPage;

  beforeEach(() => {
    page = new TestitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
