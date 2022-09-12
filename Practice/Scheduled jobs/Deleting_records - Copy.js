// insteade updated 1 yr ago i went tried with created on 2022-09-05
// so that i get only 1 record

var gr = new GlideRecord('sys_user');
gr.addQuery('sys_created_on', ">", "2022-09-05 06:16:20");
//gr.addEncodedQuery('sys_updated_on<=javascript:gs.dateGenerate('2022-02-09','23:59:59')'); // not getting this
gr.query();
gs.addInfoMessage(gr.getRowCount());

while(gr.next())
	{
gr.u_short_notes = ' hi ';
gr.setWorkflow(false);
gr.update();		
} 