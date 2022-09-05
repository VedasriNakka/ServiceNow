(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    var record = new GlideRecord('u_my_incident');
    record.addQuery('parent', current.sys_id);
    record.query();
	gs.addInfoMessage(record.getRowCount());

    while (record.next()) {
		gs.addInfoMessage(record.number);
        record.state = 3;
		record.work_notes = 'Solved';
		record.close_notes = 'parent problem is closed';
        //record.short_description += current.short_description;
		record.setWorkflow(false);
        record.update();
        gs.addInfoMessage( "inc record " + record.state + " current " + current.state);
    }

})(current, previous);