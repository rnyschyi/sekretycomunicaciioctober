/**
 * Created by nazariibanakh on 22.09.15.
 */
$(function () {
  var mainVideoFrame = $('#mainVideo');
  var listVideoItem = $('#listVideo  .thumbnail');

  listVideoItem.click(function () {
    videoUrl = $(this).data('href');
    mainVideoFrame.attr('src', videoUrl);
    return false;
  });
});
