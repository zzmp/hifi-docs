$(function() {
    $('#search-query').lunrSearch({
        indexUrl: '/search.json',
        results:  '#search-results',
        entries:  '.entries',
        template: '#search-results-template'
    });
    if (typeof tag != 'undefined' && tag != "") {
      $('.methods-'+tag).addClass("selected");
    }
    $('.sub-methods a').click(function() {
      $('.sub-methods a').removeClass("sub-methods-selected");
      $(this).addClass("sub-methods-selected");
    });
    $('.hf.article h2 a').each(function() {
      $(this).parent('h2').attr('id', $( this ).attr('href').substring(1));
    });
});
