(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    if (current.vip == true) {
        var grp = new GlideRecord("sys_user_grmember");
        grp.initialize();
        grp.group = 'd625dccec0a8016700a222a0f7900d06';
        grp.user = current.sys_id;
        grp.insert();
        gs.addInfoMessage( current.user_name + " is added to  "+ grp.name);


    } else if (current.vip == false) {
        var gr = new GlideRecord('sys_user_grmember');
        gr.addQuery('user', current.sys_id);
        //gr.addQuery('group', 'd625dccec0a8016700a222a0f7900d06');
        gr.query();
        //gs.addInfoMessage(usr);
        if (gr.next()) {
            gr.deleteRecord();
        }
    }
	
})(current, previous);