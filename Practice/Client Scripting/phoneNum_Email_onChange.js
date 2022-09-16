function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    var field = g_form.getValue('u_enter_no');
    //var reg_ex = /^(\+)([1-9]{2})(\s)(\d{10})/g;
    var reg_ex = /^[+](\d{2})(\s)(\d{10})$/;
    var is_valid = field.match(reg_ex);

    //var reg_ex_email = /^([a-zA-Z0-9][-]?[.]?)@(\w{3,8})\.(\w{2,5})$/;
	//^(?![\.])[a-zA-Z0-9!#$%*\/?|^{}`~&'\+\-=.]+(?<![.]+)@(?![\.-])[a-zA-Z0-9-\.]+(\.[a-zA-Z0-9_]+)$
    //var is_valid = newValue.match(reg_ex_email);

    if (is_valid) {
        g_form.clearMessages();
        g_form.addInfoMessage("Number/Email " + field + " is valid - onChange");
        //g_form.setValue('u_enter_no', field);
        return true;
    } else {
        g_form.clearMessages();
        g_form.addErrorMessage("please Enter Valid number -onChange");
        //g_form.showFieldMsg('u_email_id', 'Enter Valid Number/emailID', 'error');
        g_form.setValue('u_enter_no', '');
        //return false;
    }
}