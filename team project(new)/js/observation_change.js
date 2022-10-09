function changeImage(){
    element=document.getElementById('change')
    if (element.src.match("slide1"))
    {
        element.src="images/slide2.png";
        $("#Observation").hide();
    }
    else
    {
        element.src="images/slide1.png";
        $("#Observation").show();
    }
};