function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    //     var gf = g_form.getValue('category');
    //     alert(gf);
    //     g_form.getDisplayBox('caller_id').value;
    //     var i = 0;
    //     while (i < 4) {
    if (newValue == 'hardware') {
        // g_form.addInfoMessage(i);
        g_form.removeDecoration('subcategory', "icon-star-empty", 'test1', 'color-red');
        g_form.addDecoration('subcategory', "icon-cog", 'test1', 'color-blue');
        g_form.clearMessages();
        g_form.addInfoMessage("If");
        //confirm('Are you ready');
        g_form.removeOption('state', 'bad');
        g_form.addOption('state', 'good', 'GOOD', -1);
        g_form.hideFieldMsg("state");
        g_form.showFieldMsg('state', 'ERROR', 'error', false);
        //g_form.clearAllFormMessages();
        g_form.clearFormMessages('info');
        g_form.addFormMessage('warning message', 'warning');
    } else if (newValue == 'software') {
        g_form.addFormMessage("You have a INFO Message", 'info');
    } else {
        g_form.removeDecoration('subcategory', "icon-cog", 'test1', 'color-blue');
        g_form.addDecoration('subcategory', "icon-star-empty", 'test1', 'color-red');
        g_form.clearMessages();
        g_form.addErrorMessage("else");
        g_form.removeOption('state', "good");
        g_form.addOption('state', 'bad', 'BAD', -1);
        g_form.hideFieldMsg("state");

        g_form.showFieldMsg('state', 'INFO', 'info', false);
        g_form.addFormMessage("You have an ERROR", 'error');

    }
    //        i++;
    //    }
}