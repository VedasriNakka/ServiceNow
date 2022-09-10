// script include

var TestingRefQualifier = Class.create();
TestingRefQualifier.prototype = {
    initialize: function() {

    },
    getUserGroups: function() {
        var grp = [];
        var user_grp = new GlideRecord('sys_user_grmember');
        user_grp.addQuery('user', gs.getUserID());
        user_grp.query();

        while (user_grp.next()) {
            grp.push(user_grp.group.getDisplayValue());
			//grp.push(user_grp.group);
        }
        return 'sys_idIN' + grp.toString();
    },

    type: 'TestingRefQualifier'
};