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