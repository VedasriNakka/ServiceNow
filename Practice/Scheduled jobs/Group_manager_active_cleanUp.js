// Dot walk to manager fields in group list table through breadcrums:
// ‘Show Related fields’ -> ‘manager => user Fields’ ->  ‘Active’

var gr = new GlideRecord('sys_user_group');
gr.addEncodedQuery('active=true^manager.active=false');
gr.query();
// gs.print(gr.getRowCount());

while(gr.next())
	{
// gs.print(gr.manager.manager.sys_id);
//gs.print(gr.manager.manager.getDisplayValue());
gr.manager = gr.manager.manager.sys_id;
gr.setWorkflow(false);
gr.update();		
}