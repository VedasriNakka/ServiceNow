(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here(
    var gr = new GlideRecord('incident');
    gr.addQuery('sys_id', "c68482271b69d110b4e06575624bcb18");
    //gr.addQuery('number', 'INC0010007');
    gr.query();

    if (gr.next()) {
        gr.short_description = gr.short_description + "Updating";
		gr.update();
        gs.addInfoMessage("short_description: "+gr.short_description);
    }

})(current, previous);


(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here(
    var gr = new GlideRecord('u_my_incident');
    gr.addQuery('sys_id', "67ef959c1b719510b4e06575624bcbe5");
    //gr.addQuery('state', 'IN', 3);
    gr.query();
    gs.addInfoMessage("count: " + gr.getRowCount() + gr.state);

    if (gr.next()) {
        gr.short_description = "done last time";
        gs.addInfoMessage(gr.short_description + " : " + gr.number + " --- " + gr.state);
        gr.update();
    }

})(current, previous);