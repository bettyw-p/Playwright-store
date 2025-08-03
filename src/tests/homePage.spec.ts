import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/home.page'


test('Verify home page title', async ({page}) => {

  const homePage: HomePage = new HomePage(page);
  await homePage.open();
  const title = await homePage.getPageTitle();
  expect (title).toEqual('CONVERSE POLSKA Oficjalny Sklep - Converse.pl');

});
