function send()
{
    number1 = document.getElementById("no.1").value
    number2 = document.getElementById("no.2").value
    actual_ans = parseInt(number1) * parseInt(number2)

    question_number = "<h4>" + number1 + " " + "X" + " " + number2 + "</h4>"
    input_box = " <br> Answer: <input type= 'text' id='input_check_box' >"
    check_btn= "<br><br> <button class= 'btn btn-info' onclick= 'check()'>Check</button>"
    row= question_number + input_box + check_btn

    document.getElementById("output").innerHTML= row 

    document.getElementById("no.1").value= ""
    document.getElementById("no.2").value= ""
}
