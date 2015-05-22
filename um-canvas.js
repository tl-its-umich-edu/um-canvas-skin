$( document ).ready(function() {
  $('.context_external_tool_739').css('display','none');
  if(ENV.current_user_roles.indexOf('admin') > -1) {
  	$('.context_external_tool_739').css('display','block');
  }
});
