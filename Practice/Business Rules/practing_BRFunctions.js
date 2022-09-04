(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    var my_inc = new GlideRecord('u_my_incident');
    //my_inc.addActiveQuery();
    //my_inc.addInactiveQuery();
    //my_inc.addEncodedQuery('order=100^assigned_to=dc6053dcd7011200f2d224837e6103e0^state=2');
    //my_inc.addQuery('u_caller','INSTANCEOF','sys_user.vip');
    //my_inc.addNullQuery('short_description');
    //my_inc.addNotNullQuery('short_description');
    //gs.addInfoMessage('before query');
    my_inc.addQuery('sys_id', '929fddef1ba5d110b4e06575624bcbfc');  // need to check
    my_inc.query();
    //gs.addInfoMessage('before');
    while (my_inc.hasNext()) {
        //my_inc.setValue('short_description', 'changing field by from sysy_id query');
        //my_inc.short_description = 'changing field by from sysy_id query';
        my_inc.update();
        gs.addInfoMessage(my_inc.getRowCount());

        //gs.addInfoMessage(my_inc.getRowCount());
        //gs.log(tb.getRowCount());
        //gs.print(tb.getRowCount());
        //gs.info(tb.getRowCount());
    }

})(current, previous);