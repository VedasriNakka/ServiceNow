(function executeRule(current, previous /*null when async*/) {
	
	// Add your code here
	var gr = new GlideRecord('u_my_incident');
	gr.addQuery('short_description', 'IN', 'changing field by from sysy_id query');
	gr.query();
	//gs.addInfoMessage(gr.getRowCount());
	gr.deleteMultiple();
	gs.addInfoMessage(gr.getRowCount());

})(current, previous);