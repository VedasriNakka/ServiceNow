function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
	if(newValue == 6){
		var resolved_user = g_user.userID;
		g_form.setReadOnly('description',false);
		g_form.setMandatory('resolved_at', true);
		g_form.setMandatory('resolved_by', true);
		g_form.setValue('resolved_by',resolved_user);
	}
	else if(newValue == (7||8)){
		g_form.setReadOnly('description',true);
	}
}