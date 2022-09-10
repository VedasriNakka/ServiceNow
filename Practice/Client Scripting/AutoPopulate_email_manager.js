function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    //alert(g_form.getSections());
    var sections = g_form.getSections();
	//var sections = g_form.getSectionNames();
    //alert(sections);
    for (var i = 0; i < sections.length; i++) {
        //alert("session short description: " + i[1]);
        //g_form.setValue('u_new_manager', i[0].short_description);
    }

    if (newValue == '46d44a23a9fe19810012d100cca80666') {
        g_form.setMandatory('u_enter_no', true);
        g_form.setReadOnly('u_enter_no', true);
        g_form.hideAllFieldMsgs();
        g_form.showFieldMsg('u_enter_no', 'setReadOnly Function', 'info');
        //g_form.setSectionDisplay('dates',true);
        //g_form.setDisplay('u_enter_no',true);
        //g_form.setVisible('u_enter_no',true);
        //g_form.setDisabled('u_enter_no',true);
        //g_form.setValue('state', 1);
        //g_form.setValue('assignment_group', '8a5055c9c61122780043563ef53438e3');
        //g_form.setValue('order', '200');

    } else {
        g_form.setMandatory('u_enter_no', false);
        g_form.setDisabled('u_enter_no', true);
        g_form.hideAllFieldMsgs();
        g_form.showErrorBox('u_enter_no', 'setDisabled Function', 'error');
        g_form.setLabelOf('u_enter_no', 'Manager Number');
        //g_form.setSectionDisplay('dates',false);
        //g_form.setReadOnly('u_enter_no', false);
        //g_form.setDisplay('u_enter_no',false);
        //g_form.setVisible('u_enter_no',false);
        //var start = g_form.setValue('work_start', '2022-08-26 08:37:45');
        //alert(start);
        //g_form.setValue('work_end', '2022-09-05 08:37:45');
    }

    var user = g_form.getReference('u_caller',pop);
	
	function pop(user){
		g_form.setValue('u_email_id', user.email);
		g_form.setValue('u_manager', user.manager);
		//g_form.setValue('u_new_manager', user.manager);
		//     alert('Hi');
		//     alert(user.vip);
		//     if (user.vip == "true") {
		//         g_form.setValue('priority', 1);
		//         g_form.flash('priority', '#FFFACD', 0);
		//         g_form.enableAttachments();
		//     } else
		//         g_form.disableAttachments();
	}

}