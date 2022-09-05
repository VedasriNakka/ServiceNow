

(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
	var arr = [];
    if (current.vip == true) {
        var grp = new GlideRecord("sys_user_grmember");
        grp.initialize();
        grp.group = 'd625dccec0a8016700a222a0f7900d06';
        grp.user = current.sys_id;
        grp.insert();
        //gs.addInfoMessage( current.user_name + " is added to  "+ grp.group.name);
		current.u_short_notes = current.user_name + " is added to  "+ grp.group.name;

    } else if (current.vip == false) {
        var gr = new GlideRecord('sys_user_grmember');
        gr.addQuery('user', current.sys_id);
        gr.addQuery('group', 'd625dccec0a8016700a222a0f7900d06');
        gr.query();
		
		if (gr.next()) {
            gr.deleteRecord();
        }
		current.u_short_notes = current.user_name + " is removed from  "+ gr.group.GetDisplayName();
		//gs.addInfoMessage(current.user_name + " is removed from  "+ gr.group.getDisplayValue());
		//gr.deleteMultiple();
		//gs.addInfoMessage(gr.preferred_language);
		//gs.addInfoMessage( current.user_name + " is removed from  "+ arr.group.name);
    }

})(current, previous);