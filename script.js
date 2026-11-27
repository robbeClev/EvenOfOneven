$("#knop").click(function () {
    var getal = $("#invoer").val();
    if ($.isNumeric())
    {
        if (getal % 2 == 0) {
            $("#uitvoer").text("EVEN");
        } else {
            $("#uitvoer").text("ONEVEN");
        }
    }
    else
    {
        $("#uitvoer").text("FOUTE INVOER");    
    }
});