(function executeRule(current, previous /*null when async*/) {

	//Add your code here
	// Before Inset Update business rule
	var table = new GlideRecord('u_my_incident');
	table.addQuery('state',1);
	table.addQuery('assigned_to', '5137153cc611227c000bbd1bd8cd2007');
	table.addQuery('order','150');
	//table.addQuery('number','MYINC0001048');
	table.query();
	//gs.addInfoMessage(table.getRowCount());
	//gs.print(table.getRowCount());
	
	while(table.next()){
		current.u_internal = true;
		//table.u_internal = true;
		//gs.addInfoMessage("before update");
		//table.number = 'MYINC1111111';
		table.update();
		//gs.addInfoMessage("after update");
	}
})(current, previous);