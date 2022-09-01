function onSubmit() {
    //Type appropriate comment here, and begin script below
    var group = g_form.getValue('assignment_group');
    var category = g_form.getValue('category');

    if (category == 'hardware' && group == '287ebd7da9fe198100f92cc8d1d2154e') {
        g_form.clearMessages();
        g_form.addInfoMessage('if');
        //g_form.submitted = false;
        return false;
    } else {
        g_form.clearMessages();
        g_form.addInfoMessage('else');
        return true;
    }
}
