var gr = new GlideRecord('u_my_incident');
gr.addEncodedQuery('u_group_watch_list!=NULL');
gr.query();
if(gr.next()){
	gs.print(gr.number);
	var grps = gr.u_group_watch_list;
	gs.print(grps);
	var total = grps.split(",");
	for(var i =0; i < total.length; i++){
		gs.print(total[i]);
		var grp = new GlideRecord('sys_user_grmember');
		grp.initialize();
		grp.group = total[2];
		grp.user = 'b8aafaf81b751910b4e06575624bcbbf';
		grp.insert();
	}
	gs.print(grp.getRowCount());
}

