function onLoad() {
    //Type appropriate comment here, and begin script below
    var action = g_form.getActionName();
    var label = g_form.getLabelOf('description');
    var caller = g_form.getValue('u_caller');

    alert('You pressed ' + action);
    g_form.addInfoMessage('Boolean value: ' + g_form.getBooleanValue('u_new_manager'));
    alert("getControl: " + g_form.getControl('description'));
    //alert(sys_select.my_incident.u_caller);
    alert("Decimal value: " + g_form.getDecimalValue('description'));
    alert('int: ' + g_form.getIntValue('description'));
    alert(g_form.getFormElement());
    alert("option: " + g_form.getOption('state', 4).text);

    var listNames = g_form.getRelatedListNames();

    for (var i = 0; i < listNames.length; i++) {
        this.showRelatedList(listNames[i]);
    }

    // 	if(caller == '62826bf03710200044e0bfc8bcbe5df1'){
    // 		g_form.setLabelOf('description','Comments');
    // 	}

}