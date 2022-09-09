// Getting user details by using script include and client script from email (string) field

var userDetails = Class.create();
userDetails.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	
	getUserDetails : function(){	
		var user_email = this.getParameter('caller_sys_id');
		var gr = new GlideRecord('sys_user');
		//gr.addQuery('sys_id', sysid);
		gr.addQuery('email', user_email); //user_email.toString()
		gr.query();
		if(gr.next()){
			return gr.user_name + "-" + gr.manager + "-" + gr.department;
		}
	},
    type: 'userDetails'
});


//Client script

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
	var email = g_form.getValue('u_email_id');
	
	var ga = new GlideAjax('global.userDetails');
	ga.addParam('sysparm_name', "getUserDetails");
	ga.addParam('caller_sys_id', email);
	
	ga.getXML(pop);
	function pop(response) {
		var total_result = (response.responseXML.documentElement.getAttribute("answer"));
		alert(total_result);	
		var result = total_result.split('-');
		g_form.setValue('u_enter_no',result[0] );
		g_form.setValue('u_manager', result[1]);
		g_form.setValue('u_department', result[2]);
		g_form.setValue('short_description', total_result);
	}
}