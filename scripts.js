window.onload = function() {
    //language
    var currentLang = localStorage.getItem("lang") || "en";
    if (currentLang==="ru") {switchLang(1);}
    else if (currentLang==="de") {switchLang(2);}
    else {}
    // theme
    var currentTheme = localStorage.getItem("theme") || "lightTheme";
    document.getElementById("body").className=currentTheme;
}

function switchTheme(currentThemeNumber) {
    if (currentThemeNumber===1){
        document.getElementById("body").className = "darkTheme";
        localStorage.setItem('theme', "darkTheme");
    }
    else if (currentThemeNumber===2){
        document.getElementById("body").className = "redTheme";
        localStorage.setItem('theme', "redTheme");
    } 
    else if (currentThemeNumber===3){
        document.getElementById("body").className = "toxicTheme";
        localStorage.setItem('theme', "toxicTheme");
    }
    else {
        document.getElementById("body").className = "lightTheme";
        localStorage.setItem('theme', "lightTheme"); 
    } 
}

function switchLang(langNum){
    let bodyStyles = document.body.style;
    if (langNum===1){
        bodyStyles.setProperty('--enVis', 'none');
        bodyStyles.setProperty('--ruVis', 'block');
        bodyStyles.setProperty('--deVis', 'none');
        localStorage.setItem("lang","ru")
    }
    else if (langNum===2){
        bodyStyles.setProperty('--enVis', 'none');
        bodyStyles.setProperty('--ruVis', 'none');
        bodyStyles.setProperty('--deVis', 'block');
        localStorage.setItem("lang","de")
    }
    else{
        bodyStyles.setProperty('--enVis', 'block');
        bodyStyles.setProperty('--ruVis', 'none');
        bodyStyles.setProperty('--deVis', 'none')
        localStorage.setItem("lang","en")
    }
}



    
    


