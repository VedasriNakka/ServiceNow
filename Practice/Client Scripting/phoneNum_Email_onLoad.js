function onLoad() {
    var field = g_form.getValue('u_enter_no');
    //var reg_ex = /^(\+)([1-9]{2})(\s)(\d{10})/g;
    var reg_ex = /^[+](\d{2})(\s)(\d{10})$/;
    var is_valid = field.match(reg_ex);
	
//     var field = g_form.getValue('u_email_id');
   var reg_ex_email = /^\w+([-.]\w)*@\w{4,8}\.\w{2,5}$/;
//     var is_valid = field.match(reg_ex_email);

    if (is_valid) {
        g_form.clearMessages();
        g_form.addInfoMessage("Number/Email " + field + " is valid - onLoad");
        g_form.setValue('u_enter_no', field);
		//g_form.setValue('u_email_id', field);
        //return true;
    } else {
        g_form.clearMessages();
        g_form.addErrorMessage("please Enter Valid number - onLoad");
        //g_form.showFieldMsg('u_email_id', 'Enter Valid Number/emailID', 'error');
        g_form.setValue('u_enter_no', '');
		//g_form.setValue('u_email_id', '');
        //return false;
    }
}