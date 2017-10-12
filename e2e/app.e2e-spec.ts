import { TwitterSearchPage } from './app.po';

describe('TwitterSearch App', () => {
  let page: TwitterSearchPage;

  beforeEach(() => {
    page = new TwitterSearchPage();
  });

  it('should display the navbar correctly', () => {
    page.navigateTo();
    expect(page.getNavbarElement(0)).toEqual('Twitter Search');
  });
});
