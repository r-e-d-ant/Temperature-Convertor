

function calculate() {
    var fromTemperType = document.getElementById("from-temp-type").value;
    var toTemperType = document.getElementById("to-temp-type").value;

    // ••••••••• KELVIN ••••••
    // ====  Kelvin To Fahrneit ==== <<< WORKING >>>
    if (fromTemperType == "Kelvin" && toTemperType == "Fahrenheit"){
        var kelvF = parseInt(document.getElementById("from-temp-value").value);
    
        var resultKF = (((kelvF - 273.15) * 9/5) + 32).toFixed(1);

        if (kelvF){
            console.log(kelvF)
            document.getElementById("to-temp-value").value =
            resultKF + " ˚F";
        }else {
            document.getElementById("to-temp-value").value = "0 ˚F";
        }
    }

    // ==== Fahrneit To  Kelvin ==== <<< WORKING >>>
    if (fromTemperType == "Fahrenheit" && toTemperType == "Kelvin"){
        var fahrK = parseInt(document.getElementById("from-temp-value").value);
    
        var resultFK = (((fahrK - 32) * 5/9) + 273.15).toFixed(1);

        if (fahrK){
            document.getElementById("to-temp-value").value =
            resultFK + " ˚K";
        }else {
            document.getElementById("to-temp-value").value = "0 ˚K";
        }
    }

    // ====  Kelvin To Celsius ==== <<< WORKING >>>
    if (fromTemperType == "Kelvin" && toTemperType == "Celsius"){
        var kelvC = parseInt(document.getElementById("from-temp-value").value);
    
        var resultKC = (kelvC - 273.15).toFixed(1);

        if (kelvC){
            document.getElementById("to-temp-value").value =
            resultKC + " ˚C";
        }else {
            document.getElementById("to-temp-value").value = "0 ˚C";
        }
    }

    // ====  Celsius To Kelvin ==== <<< WORKING >>>
    if (fromTemperType == "Celsius" && toTemperType == "Kelvin"){
        var celsK = parseInt(document.getElementById("from-temp-value").value);
    
        var resultCK = (celsK + 273.15).toFixed(1);

        if (celsK){
            document.getElementById("to-temp-value").value =
            resultCK + " ˚K";
        }else {
            document.getElementById("to-temp-value").value = "0 ˚K";
        }
    }

    // ••••• FAHRENEIT ••••

    // ====  Fahrneit To Celsius ==== <<< WORKING >>>
    if (fromTemperType == "Fahrenheit" && toTemperType == "Celsius"){
        var fahrC = parseInt(document.getElementById("from-temp-value").value);
    
        var resultFC = ((fahrC - 32) * 5/9).toFixed(1);

        if (fahrC){
            document.getElementById("to-temp-value").value =
            resultFC + " ˚C";
        }else {
            document.getElementById("to-temp-value").value = "0 ˚C";
        }
    }

    // ====  Celsius To Fahrneit ==== <<< WORKING >>>
    if (fromTemperType == "Celsius" && toTemperType == "Fahrenheit"){
        var celsF = parseInt(document.getElementById("from-temp-value").value);
    
        var resultCF = ((celsF * 9/5) + 32).toFixed(1);

        if (celsF){
            document.getElementById("to-temp-value").value =
            resultCF + " ˚F";
        }else {
            document.getElementById("to-temp-value").value = "0 ˚F";
        }
    }
}
