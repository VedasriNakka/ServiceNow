function onLoad() {
    //Type appropriate comment here, and begin script below
    var sys_id = g_user.userID;
    var new_record = g_form.isNewRecord();
    //alert(sys_id);
    //alert(g_user.getFullName());
    //alert(g_form.isNewRecord());
    //alert(g_form.getValue('u_caller'));
    if (new_record == true) {
        g_form.setValue('u_caller', sys_id);
        g_form.setValue('order', '100');
        g_form.setValue('state', 2);
        g_form.setValue('assigned_to', 'dc6053dcd7011200f2d224837e6103e0');

        var user = g_form.getReference('u_caller');
        g_form.setValue('u_email_id', user.email);
        g_form.setValue('u_manager', user.manager);
    }
	if(g_form.getValue('manager') != ' '){
		//g_form.setValue('work_start','2022-09-07 10:51:05');
		g_form.setValue('short_description', " your manager is not empty");
		//alert('Today date is ' + g_form.getValue('u_today_date'));
		var today_date = new Date(); 
		var today_date_str = formatDate(today_date, g_user_date_time_format); 
		g_form.setValue('work_start', today_date_str);
	}
	
// 	var getEmail = g_form.getReference('email');
//     if (getEmail != '') {
//         g_form.setValue('short_description', " hi  your email is not empty");
// 		//alert('Today date is ' + g_form.getValue('u_today_date'));
// 		var today_date = new Date(); 
// 		var today_date_str = formatDate(today_date, g_user_date_format); 
// 		g_form.setValue('u_today_date', today_date_str);
// 	}

}