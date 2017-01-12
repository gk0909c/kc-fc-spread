import { KcFcSpreadPage } from './app.po';

describe('kc-fc-spread App', function() {
  let page: KcFcSpreadPage;

  beforeEach(() => {
    page = new KcFcSpreadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
