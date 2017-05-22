import { DatatableRowDetailsPage } from './app.po';

describe('datatable-row-details App', () => {
  let page: DatatableRowDetailsPage;

  beforeEach(() => {
    page = new DatatableRowDetailsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
