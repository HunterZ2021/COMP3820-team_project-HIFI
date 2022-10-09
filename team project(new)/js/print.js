function print(){
    var divContents = document.getElementById("form").innerHTML;
    var a = window.open();
    a.document.write('<html>');
    a.document.write('<body >');
    a.document.write(divContents);
    a.document.write('</body>');
    a.document.write('</html>');
    a.document.close();
    a.print();
}
