function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
	if(newValue == 3){
		g_form.setMandatory('work_notes', false);
		g_form.setReadOnly('work_notes',true);
	}
}