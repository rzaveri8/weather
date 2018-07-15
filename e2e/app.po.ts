import {browser, by, element} from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get('/');
  }

  static getHeaderText() {
    return element(by.id('header')).getText();
  }
}
