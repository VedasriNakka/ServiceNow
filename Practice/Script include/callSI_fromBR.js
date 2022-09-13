// calling script include from business rule

// SCRIPT INCLUDE
var userDetailsBR = Class.create();
userDetailsBR.prototype = {
    initialize: function() {},
    getUserDetailsBR: function() {

        //var user_email = this.getParameter('caller_sys_id');
        //var sysid = this.getParameter('caller_sys_id');

        var gr = new GlideRecord('sys_user');
        gr.addQuery('sys_id', current.u_caller);
        //gr.addQuery('email', user_email.toString());
        gr.query();
        if (gr.next()) {
			//gs.addInfoMessage(gr.user_name + " - " + gr.manager + " - " + gr.department);
            return gr.user_name + "-" + gr.manager + "-" + gr.department;
        }
    },

    type: 'userDetailsBR'
};



//BUSINESS RULE
(function executeRule(current, previous /*null when async*/ ) {

    // Getting values of caller user from script include
    //var caller = current.getValue('u_caller');
    gs.addInfoMessage("before caller: " + current.u_caller);

    //     var sc_include = new userDetailsBR();      // method is not working
    //     sc_include.getUserDetailsBR();
    //gs.addInfoMessage("user details: " + sc_include);

    var user_details = new userDetailsBR().getUserDetailsBR();
    gs.addInfoMessage("total info of user: " + user_details);
	current.description = user_details;
    var result = user_details.split('-');
    current.u_enter_no = result[0];
    current.u_manager = result[1];
    current.u_department = result[2];
  
})(current, previous);