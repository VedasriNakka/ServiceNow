function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    var saveAndClose = true;
    //Type appropriate comment here, and begin script below
//     alert('sysIDs: ' + sysIDs);
//     alert('table: ' + table);
//     alert('oldValues: ' + oldValues);
//     alert('newValue: ' + newValue);
//     alert('callback: ' + callback);
    if (newValue == 3 || newValue == 4 || newValue == 7) {
		alert('yes');
        saveAndClose = false;
    } else{
		alert('no');
		saveAndClose = true;
	}

    callback(saveAndClose);
}