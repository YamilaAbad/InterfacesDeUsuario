$(document).ready(function() {
    var likes = 252;
    var dislikes = 33;
    $('.like').attr('data-likes', likes);
    $('.dislike').attr('data-dislikes', dislikes);
    $('.text').click(function() {
      $('.like').toggleClass('like_active');
      $('.dislike').toggleClass('dislike_active');
      if ($('.text').text() == 'Vote') {
        $('.text').text('Cancel');
      } else {
        $('.text').text('Vote');
      }
    })
    $('.like').click(function() {
      likes++;
      $('.like').attr('data-likes', likes);
      $('.like').removeClass('like_active');
      $('.dislike').removeClass('dislike_active');
      $('.text').text('Vote');
    })  
    $('.dislike').click(function() {
      dislikes++;
      $('.dislike').attr('data-dislikes', dislikes);
      $('.like').removeClass('like_active');
      $('.dislike').removeClass('dislike_active');
      $('.text').text('Vote');
    })
  })