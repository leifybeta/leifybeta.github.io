
function load() {
    document.getElementById("title").innerHTML = articles[0][0];
    document.getElementById("subtitle").innerHTML = articles[0][1];
    document.getElementById("author").innerHTML = articles[0][3];
    document.getElementById("date").innerHTML = articles[0][4];
    document.getElementById("link").setAttribute("href", articles[0][5]);
    document.getElementById("articleimg").setAttribute("src", articles[0][2]);

    //document.getElementById("title2").innerHTML = articles[1][0];
    //document.getElementById("subtitle2").innerHTML = articles[1][1];
    //document.getElementById("author2").innerHTML = articles[1][3];
    //document.getElementById("date2").innerHTML = articles[1][4];
    //document.getElementById("link2").setAttribute("href", articles[1][5]);
    //document.getElementById("articleimg2").setAttribute("src", articles[1][2]);

    //document.getElementById("title3").innerHTML = articles[2][0];
    //document.getElementById("subtitle3").innerHTML = articles[2][1];
    //document.getElementById("author3").innerHTML = articles[2][3];
    //document.getElementById("date3").innerHTML = articles[2][4];
    //document.getElementById("link3").setAttribute("href", articles[2][5]);
    //document.getElementById("articleimg3").setAttribute("src", articles[2][2]);

    //document.getElementById("title4").innerHTML = articles[3][0];
    //document.getElementById("subtitle4").innerHTML = articles[3][1];
    //document.getElementById("author4").innerHTML = articles[3][3];
    //document.getElementById("date4").innerHTML = articles[3][4];
    //document.getElementById("link4").setAttribute("href", articles[3][5]);
    //document.getElementById("articleimg4").setAttribute("src", articles[3][2]);

    //document.getElementById("title5").innerHTML = articles[4][0];
    //document.getElementById("subtitle5").innerHTML = articles[4][1];
    //document.getElementById("author5").innerHTML = articles[4][3];
    //document.getElementById("date5").innerHTML = articles[4][4];
    //document.getElementById("link5").setAttribute("href", articles[4][5]);
    //document.getElementById("articleimg5").setAttribute("src", articles[4][2]);

    //document.getElementById("title6").innerHTML = articles[5][0];
    //document.getElementById("subtitle6").innerHTML = articles[5][1];
    //document.getElementById("author6").innerHTML = articles[5][3];
    //document.getElementById("date6").innerHTML = articles[5][4];
    //document.getElementById("link6").setAttribute("href", articles[5][5]);
    //document.getElementById("articleimg6").setAttribute("src", articles[5][2]);

    //document.getElementById("title7").innerHTML = articles[6][0];
    //document.getElementById("subtitle7").innerHTML = articles[6][1];
    //document.getElementById("author7").innerHTML = articles[6][3];
    //document.getElementById("date7").innerHTML = articles[6][4];
    //document.getElementById("link7").setAttribute("href", articles[6][5]);
    //document.getElementById("articleimg7").setAttribute("src", articles[6][2]);

    //document.getElementById("title8").innerHTML = articles[7][0];
    //document.getElementById("subtitle8").innerHTML = articles[7][1];
    //document.getElementById("author8").innerHTML = articles[7][3];
    //document.getElementById("date8").innerHTML = articles[7][4];
    //document.getElementById("link8").setAttribute("href", articles[7][5]);
    //document.getElementById("articleimg8").setAttribute("src", articles[7][2]);

    //document.getElementById("title9").innerHTML = articles[8][0];
    //document.getElementById("subtitle9").innerHTML = articles[8][1];
    //document.getElementById("author9").innerHTML = articles[8][3];
    //document.getElementById("date9").innerHTML = articles[8][4];
    //document.getElementById("link9").setAttribute("href", articles[8][5]);
    //document.getElementById("articleimg9").setAttribute("src", articles[8][2]);

    //document.getElementById("title10").innerHTML = articles[9][0];
    //document.getElementById("subtitle10").innerHTML = articles[9][1];
    //document.getElementById("author10").innerHTML = articles[9][3];
    //document.getElementById("date10").innerHTML = articles[9][4];
    //document.getElementById("link10").setAttribute("href", articles[9][5]);
    //document.getElementById("articleimg10").setAttribute("src", articles[9][2]);


    document.getElementsByClassName("latestarticleindex")[0].setAttribute("href", articles[0][5]);
    document.getElementsByClassName("latestarticleindex")[1].setAttribute("href", articles[0][5]);
}

function loadarticle() {
    document.getElementsByClassName("latestarticle")[0].setAttribute("href", articles[0][6]);
    document.getElementsByClassName("latestarticle")[1].setAttribute("href", articles[0][6]);

    document.getElementById("title").innerHTML = articles[0][0];
    document.getElementById("subtitle").innerHTML = articles[0][1];
    document.getElementById("author").innerHTML = articles[0][3];
    document.getElementById("date").innerHTML = articles[0][4];
    document.getElementById("link").setAttribute("href", articles[0][6]);
    document.getElementById("articleimg").setAttribute("src", articles[0][7]);

    document.getElementById("title2").innerHTML = articles[1][0];
    document.getElementById("subtitle2").innerHTML = articles[1][1];
    document.getElementById("author2").innerHTML = articles[1][3];
    document.getElementById("date2").innerHTML = articles[1][4];
    document.getElementById("link2").setAttribute("href", articles[1][6]);
    document.getElementById("articleimg2").setAttribute("src", articles[1][7]);
}



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}