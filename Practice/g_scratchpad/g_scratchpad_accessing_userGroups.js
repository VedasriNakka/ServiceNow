// Display BR testing g_scratchpad. calling server data from client scripting.

//BUSINESS RULES
(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
// 	var caller = current.u_caller;
//     var gr = new GlideRecord('sys_user');
//     gr.addQuery('sys_id', caller);
//     gr.query();
//     if (gr.next()) {
//         var containr = [];
//         var gr1 = new GlideRecord('sys_user_grmember');
//         gr1.addQuery('user', gr.sys_id);
//         gr1.query();
//         while (gr1.next()) {
//             containr.push(gr1.group.getDisplayValue());
//             //containr.update();
//         }
//         g_scratchpad.skfacts = containr;
// 		g_scratchpad.caller = current.u_caller.getDisplayValue();
//     }
        var usr = new GlideRecord('sys_user');
    usr.addActiveQuery();
    usr.addQuery("sys_id", current.u_caller); //current.getValue('caller_id'));
    usr.query();
    g_scratchpad.sysid = usr.sys_id;
    g_scratchpad.caller = current.u_caller.getDisplayValue();
    if (usr.next()) {
        var all_grps = [];
        gs.addInfoMessage(usr.sys_id);
        var grp = new GlideRecord('sys_user_grmember');
        grp.addQuery('user', usr.sys_id); //usr.sys_id);
        grp.query();
        while (grp.next()) {
            all_grps.push(grp.group.getDisplayValue()); //gr1.group.name //grp.getDisplayValue('group')
        }
        g_scratchpad.test = all_grps;
        g_scratchpad.hasAttachment = current.hasAttachments();
    }

})(current, previous);





// client side scripting -- onLoad/onChange any type can write

function onLoad() {
    //Type appropriate comment here, and begin script below
    //     alert(g_scratchpad.caller + ": " + g_scratchpad.skfacts);
    //     g_form.setValue('description', g_scratchpad.skfacts);
    //     alert("caller - " + g_scratchpad.caller);

    alert(g_scratchpad.caller + ": " + g_scratchpad.test);
    //g_form.setValue('description', g_scratchpad.test);
	g_form.setValue('u_group_watch_list', g_scratchpad.test);

    g_form.addInfoMessage("sys_id - " + g_scratchpad.sysid);
    g_form.getValue('sys_id');
    if (g_scratchpad.hasAttachment) {
        g_form.addInfoMessage('This form has an attachment. Hurray!');
    } else {
        g_form.addInfoMessage('No attachment found');
    }

}