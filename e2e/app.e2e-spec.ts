import { Ng2PagePage } from './app.po';

describe('ng2-page App', function() {
  let page: Ng2PagePage;

  beforeEach(() => {
    page = new Ng2PagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
