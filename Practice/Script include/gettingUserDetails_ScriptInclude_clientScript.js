- Script include
```js
var userDetails = Class.create();
userDetails.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	// getting user details
	getUserDetails : function(){
		
		var sysid = this.getParameter('caller_sys_id');
		
		var gr = new GlideRecord('sys_user');
		gr.addQuery('sys_id', sysid);
		gr.query();
		if(gr.next()){
			return gr.user_name + "-" + gr.manager + "-" + gr.email;
		}
	},
    type: 'userDetails'
});
```
- Client script
```js
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
	var cal = g_form.getValue('u_caller');
	
	var ga = new GlideAjax('global.userDetails');
	ga.addParam('sysparm_name', "getUserDetails");
	ga.addParam('caller_sys_id', cal);
	
	ga.getXML(pop);
	
	function pop(response) {
		var total_result = (response.responseXML.documentElement.getAttribute("answer"));
		alert(total_result);
		
		var result = total_result.split('-');
		g_form.setValue('u_enter_no',result[0] );
		g_form.setValue('u_manager', result[1]);
		g_form.setValue('u_email_id', result[2]);
		g_form.setValue('short_description', total_result);
	}
}
```