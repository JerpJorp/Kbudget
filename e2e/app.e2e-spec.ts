import { KbudgetPage } from './app.po';

describe('kbudget App', () => {
  let page: KbudgetPage;

  beforeEach(() => {
    page = new KbudgetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
