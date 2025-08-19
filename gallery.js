// jQuery-based interactive gallery
$(function () {
  const $thumbs = $("#thumbnails img");
  const $title = $("#mainDisplay h3");
  const $desc = $("#mainDisplay p");
  const $img = $("#mainImage");

  $thumbs.on("click", function () {
    const $t = $(this);
    $title.text($t.data("title"));
    $desc.text($t.data("desc"));
    $img.attr("src", $t.data("img"));
    $img.attr("alt", $t.data("title"));
  });
});
