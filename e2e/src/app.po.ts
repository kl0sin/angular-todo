import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): any {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText(): any {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
