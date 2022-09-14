function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
	var ci = g_form.getReference('cmdb_ci',fun);
	function fun(ci){
		alert(ci +" : "+ci.change_control);
		g_form.setValue('assignment_group', ci.change_control);
	}
}