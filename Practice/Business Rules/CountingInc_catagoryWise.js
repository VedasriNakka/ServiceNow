// counting incident Catagory wise using GlideAggregate and GlideRecord

var count = new GlideAggregate('incident');
//count.addQuery('active', '=','true');
count.addAggregate('COUNT', 'category');
count.query();  
while (count.next()) {
   var category = count.category;
   var categoryCount = count.getAggregate('COUNT', 'category');
   gs.info("There are " + categoryCount + " : " + category + " incidents ");
}


//GlideRecord
var gr = new GlideRecord('incident');
gr.addQuery('assignment_group!=NULL');
gr.query();
while(gr.next()){
	var gr1 = new GlideRecord('incident');
	gr1.addQuery('assignment_group', gr.assignment_group);
	gr1.query();
	var rowCount = gr1.getRowCount();
	gs.print("Incidents for Group: " + gr.assignment_group.getDisplayValue() + " are " + rowCount);
}