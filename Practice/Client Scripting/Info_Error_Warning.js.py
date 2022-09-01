function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    if (newValue == 'hardware') {
        //g_form.clearAllFormMessages();
        //g_form.clearFormMessages('info');
        g_form.addFormMessage('warning message', 'warning');
    } else if (newValue == 'software') {
        g_form.addFormMessage("You have a INFO Message", 'info');
    } else {
        g_form.addFormMessage("You have an ERROR", 'error');
    }
}