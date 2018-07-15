import {AppPage} from './app.po';

describe('weather App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header text', () => {
    AppPage.navigateTo();
    expect(AppPage.getHeaderText()).toEqual('immino')
      .then(() => {
        console.log('test passed');
      })
      .catch(err => {
        console.log(err);
      });
  });
});
