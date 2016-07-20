$(document).ready(function() {
  // convert headings to an anchor string that can be used in the url
  // e.g. "This is a heading" will be converted to "this-is-a-heading"
  String.prototype.toAnchorString = function () {
    return this.replace(/ /g, '_').replace(/\W/g, "").replace(/_+/g, '-')
               .toLowerCase();
  };

  // add anchors to the page
  $("h1, h2, h3, h4, h5, h6").each(function(i, el) {
    var id = $(el).attr('id')
    if (id === undefined) {
      // if no id is given, create one from the text of the heading
      id = $(el).text().toAnchorString();
      $(el).attr('id', id);
    }

    $(el).prepend(
      $("<a>").addClass("header-link").attr("href", "#" + id).html('<i class="fa fa-link"></i>')
    );
  });
});
