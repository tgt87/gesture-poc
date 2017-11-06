import { GesturePocPage } from './app.po';

describe('gesture-poc App', () => {
  let page: GesturePocPage;

  beforeEach(() => {
    page = new GesturePocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
