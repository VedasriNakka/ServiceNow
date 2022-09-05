(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    var record = new GlideRecord('problem');
    record.addQuery('parent', current.sys_id);
    record.query();
    gs.addInfoMessage(record.getRowCount());

    while (record.next()) {
        if (current.state == 3) {
            gs.addInfoMessage(record.number);
            record.state = 107;
            record.assigned_to = '4ac73ecd738123002728660c4cf6a72c';
            record.resolution_code = 'resolved by admin';
            record.fix_notes = 'Solved';
            record.cause_notes = 'incident state is closed - these is no problem';
            //record.short_description += current.short_description;
            record.setWorkflow(true);
            record.update();
            gs.addInfoMessage("problem " + record.state + " current " + current.state);
        }
    }

})(current, previous);