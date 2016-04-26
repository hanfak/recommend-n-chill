describe('recommendNChillController', function(){
  beforeEach(module('recommendNChill'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('recommendNChillController');
  }));

  it('has a list of movies', function(){
    var movies = ['Armageddon', 'Scorpion King'];
    expect(ctrl.movies).toEqual(movies);
  });
});
