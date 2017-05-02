import { SearchGithubPage } from './app.po';

describe('search-github App', () => {
  let page: SearchGithubPage;

  beforeEach(() => {
    page = new SearchGithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
