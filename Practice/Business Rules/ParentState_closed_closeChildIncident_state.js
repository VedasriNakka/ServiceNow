(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    var record = new GlideRecord('incident');
    record.addQuery('parent', current.sys_id);
    record.query();
	gs.addInfoMessage(record.number);

    while (record.next()) {
		gs.addInfoMessage(record.number);
        record.state = 7;
		record.close_code = 'Solved Remotely (Work Around)';
		record.close_notes = 'parent Incident is closed';
        //record.short_description += current.short_description;
		record.setWorkflow(false);
        record.update();
        gs.addInfoMessage( "incident " + record.state + " current " + current.state);
    }

})(current, previous);