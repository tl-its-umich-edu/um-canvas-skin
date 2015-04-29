$( document ).ready(function() {
  $('.context_external_tool_633').css('display','none');
  if(ENV.current_user_roles.indexOf('admin') > -1) {
  	$('.context_external_tool_633').css('display','block')
  }
});