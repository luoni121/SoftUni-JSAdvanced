<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Subtraction</title>
</head>
<body>
<div id="wrapper">
    <input type="text" id="firstNumber" value="13.33" disabled>
    <input type="text" id="secondNumber" value="22.18" disabled>

    <div id="result"></div>
</div>
<script src="subtract.js"></script>
<script>
    window.onload = function () {
    
    let num1 = Number(document.getElementById('firstNumber').value);
    let num2 = Number(document.getElementById('secondNumber').value);

    document.getElementById('result').textContent = num1 - num2;
   
   }
</script>
</body>
</html>
