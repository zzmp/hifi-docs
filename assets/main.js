$(function() {
    $('#search-query').lunrSearch({
        indexUrl: '/search.json',
        results:  '#search-results',
        entries:  '.entries',
        template: '#search-results-template'
    });
    if (tag != "") {
      $('.methods-'+tag).addClass("selected");
    }
});
