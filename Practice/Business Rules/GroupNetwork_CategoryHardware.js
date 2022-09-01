(function executeRule(current, previous /*null when async*/ ) {
    
	// Before Insert Update business rule
    //var gr = new GlideRecord('incident');
    //var category = 'hardware';
    //var group = '287ebd7da9fe198100f92cc8d1d2154e';

    //if( category == true && group == true){
    if ((current.assignment_group == '287ebd7da9fe198100f92cc8d1d2154e' && current.category == 'hardware')) {
        gs.addInfoMessage('if');
        current.setAbortAction(true);
    } else {
        gs.addInfoMessage('else');
        current.setAbortAction(false);
    }
})(current, previous);