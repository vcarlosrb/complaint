import { ComplaintPage } from './app.po';

describe('complaint App', () => {
  let page: ComplaintPage;

  beforeEach(() => {
    page = new ComplaintPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
