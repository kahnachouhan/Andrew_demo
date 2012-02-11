$(document).ready(function() {
  var url_list = [];
  tips = $("#error_message");
  $('form.new_web_url').submit(function(){
    var url = $("#web_url_url").val();
    if (/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i.test(url)) {
      url_domain = url.split('//');
      if(url_domain.length > 1)
        display_url = url_domain[1].replace("www.","").split('/')[0];
      else
        display_url = url_domain[0].replace("www.","").split('/')[0];
      if($.inArray(display_url, collection_urls) > -1){
        tips.text("URL already added");
      }else{
        $("ul").prepend("<li>"+ display_url +"</li>");
        url_list.push(url);
        $("#web_url_url").val("");
        tips.text("");
        collection_urls.push(display_url);
      }
    }else{
      if(url.length == 0)
        tips.text("URL cannot be blank");
      else
        tips.text("URL does not appear to be valid");
    }
    return false;
  });

  setTimeout(function() {worker();}, 15000 );
  function worker(){
    if(url_list.length > 0){
      $.ajax({
        url: "/web_urls",
        type: "post",
        data: {url_list: url_list},
        success: function(response, textStatus, jqXHR){
          $.each(response, function(index, value) { 
            url_list.pop(value); 
          });
        },
        error: function(jqXHR, textStatus, errorThrown){
        },
        complete: function(){
        }
      });
    }
    setTimeout(function() {worker();}, 15000 );
  }
});

