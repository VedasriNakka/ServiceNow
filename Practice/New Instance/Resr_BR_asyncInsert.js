(function executeRule(current, previous /*null when async*/ ) {

    var rbody = {
        "sys_id": current.getValue("sys_id").toString(),
        "short_description": current.getValue("short_description"),
        "assignment_group": current.getValue("assignment_group").toString(),
        "description": current.getValue('description'),
        "caller_id": current.getValue('caller_id').toString(),
        "state": current.getValue('state'),
        "priority": current.getValue('priority'),
        "impact": current.getValue('impact'),
        "urgency": current.getValue('urgency'),
        "category": current.getValue('category'),
        "number": "INC0010129"
    };

    var r = new sn_ws.RESTMessageV2('vishnu_instance', 'create_incident');


    r.setRequestBody(JSON.stringify(rbody));
    r.execute();

    var response = r.execute();
    var responseBody = response.getBody();
    var httpStatus = response.getStatusCode();


    gs.info("rest responce: " + httpStatus);
    gs.info("rest responce body : " + responseBody);


    if (httpStatus == '201') {
        gs.info("rest message successed with responce: " + httpStatus);
    } else if (httpStatus == '200') {
        gs.info("rest message successed with responce: " + httpStatus);
    } else {
        gs.info("rest message failed with responce: " + httpStatus);
    }
})(current, previous);