
$(document).ready(function() {

  $('.excerpt').on('click', function(ev) {
    var href = $(ev.target).closest('.excerpt').attr('data-href');
    window.location.href = href;
  });

  $('.post-link').before('<span class="icon icon-film" />');
  $('h1 > .title').before('<span class="icon icon-film" />');
});

