describe('recommendNChill', function(){
  var list = $$('#movies p span');
  var searchList = $$('#search-results li p');

  xit('displays list of movies', function(){
    browser.get('/');
    expect(list.first().getText()).toEqual('Armageddon');
    expect(list.last().getText()).toEqual('Scorpion King');
  });

  it('displays search results', function(){
    browser.get('/');
    $('#new-movie').sendKeys('Taken');
    $('#search-movie').click();
    expect(searchList.getText()).toContain('Taken');
  });

  it('adds a movie', function() {
    browser.get('/');
    $('#new-movie').sendKeys('Taken');
    $('#search-movie').click();
    $('#add-movie').click();
    expect(list.last().getText()).toEqual('Taken');
  });

  xit('removes a movie from list', function() {
    browser.get('/');
    $('#remove-movie').click();
    expect(list.count()).toEqual(1);
  });
});