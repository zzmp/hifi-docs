$(function() {
    $('#search-query').lunrSearch({
        indexUrl: '/search.json',
        results:  '#search-results',
        entries:  '.entries',
        template: '#search-results-template'
    });
    if (typeof tag != 'undefined' && tag != "") {
      $('.methods-'+tag).addClass("selected");
      $('.methods-'+tag).find('i').removeClass('fa-caret-right').addClass('fa-caret-down');
    }

    $('.page-link a[href="' + window.location.pathname +'"]').addClass('selected');
    $('.sub-methods a[href="' + window.location.hash +'"]').addClass('sub-methods-selected');
    $('.sub-methods a').click(function() {
      $('.sub-methods a').removeClass("sub-methods-selected");
      $(this).addClass("sub-methods-selected");
    });
    $('.hf.article h2 a').each(function() {
      $(this).parent('h2').attr('id', $( this ).attr('href').substring(1));
      $(this).parent('h2').addClass("anchor-fragment");
    });

    $('.hf.home #search-query').keypress(function() {
        if ($(this).val().length >= 1) {
          $("#search-wrapper .search").addClass('selected');
        }
    });
    $('.hf.home #search-query').keyup(function() {
        if ($(this).val().length < 1) {
          $("#search-wrapper .search").removeClass('selected');
        }
    });
});
