$( document ).ready(function() {
  if(ENV.current_user_roles.indexOf("admin") == -1) {
    $("#section-tabs li.section:contains('Content Migrations')").remove();
  }
});
