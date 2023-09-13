

//Open Tab ---------------------------------------------
function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}

//Include html ---------------------------------------------
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain attribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

/*
* Javascript to show and hide cookie banner using localstorage
*/

/**
 * @description Shows the cookie banner
 */
function showCookieBanner(){
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "block";
}

/**
 * @description Hides the Cookie banner and saves the value to localstorage
 */
function hideCookieBanner(){
    localStorage.setItem("cb_isCookieAccepted", "yes");

    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "none";
}

/**
 * @description Checks the localstorage and shows Cookie banner based on it.
 */
function initializeCookieBanner(){
    let isCookieAccepted = localStorage.getItem("cb_isCookieAccepted");
    if(isCookieAccepted === null)
    {
        localStorage.setItem("cb_isCookieAccepted", "no");
        showCookieBanner();
    }
    if(isCookieAccepted === "no"){
        showCookieBanner();
    }
}

// Assigning values to window object
window.onload = initializeCookieBanner();
window.cb_hideCookieBanner = hideCookieBanner;


/* End Cookie Consent */