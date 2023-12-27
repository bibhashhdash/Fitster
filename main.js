function BMI() {
    var height = document.getElementById('h').value;
    var weight = document.getElementById('w').value;

    var bmi = weight/(height/100*height/100);
    var bmio = (bmi.toFixed(2));

    document.getElementById('result').innerHTML="BMI: " + bmio;

    if ((height && weight) == 0) {
        document.getElementById('result').innerHTML="Please provide all the information";
    }

    if ((bmio > 0) && (bmio < 18.5)) {
        document.getElementById('status').innerHTML="Category: Underweight";
    }
    else if((bmio >= 18.5) && (bmio <= 24.9)){
        document.getElementById('status').innerHTML="Category: Normal";
    } 
    else if((bmio >= 25) && (bmio <= 29.9)){
        document.getElementById('status').innerHTML="Category: Overweight";
    } 
    else if((bmio >= 30) && (bmio <= 40)){
    document.getElementById('status').innerHTML="Category: Obesity";
    }
}

function RFM(){
    var gender = document.getElementById("gender");
    var value = gender.options[gender.selectedIndex].value;
    var height = document.getElementById('height').value;
    var waist = document.getElementById('waist').value;
    var rfm = 0;

    if (height == 0) {
        document.getElementById('res').innerHTML="Please provide all the information";
    }
    else if(waist == 0){
        document.getElementById('res').innerHTML="Please provide all the information";
    }
    else if(value == ""){
        document.getElementById('res').innerHTML="Please provide all the information";
    }
    else{
        if(value == "Male"){
            var rfm = 64 - (20 * (height/waist));
            var rfmo = (rfm.toFixed(1));
    
            document.getElementById('res').innerHTML="RFM: " + rfmo + "%";
    
            if ((rfmo > 0) && (rfmo < 2)) {
                document.getElementById('sts').innerHTML="Category: Extreme low fat";
            }
            else if((rfmo >= 2 ) && (rfmo <= 5)){
                document.getElementById('sts').innerHTML="Category: Essential fat";
            } 
            else if((rfmo >= 6 ) && (rfmo <= 13)){
                document.getElementById('sts').innerHTML="Category: Athlete";
            } 
            else if((rfmo >= 14 ) && (rfmo < 18)){
                document.getElementById('sts').innerHTML="Category: Fitness";
            } 
            else if((rfmo >= 18 ) && (rfmo <= 24)){
                document.getElementById('sts').innerHTML="Category: Average";
            } 
            else if((rfmo >= 25 ) && (rfmo <= 50)){
                document.getElementById('sts').innerHTML="Category: Obese";
            } 
        }
        else if(value == "Female"){
    
            var rfm = 76 - (20 * (height/waist));
            var rfmo = (rfm.toFixed(1));
    
            document.getElementById('res').innerHTML="RFM = " + rfmo + "%";
    
            if ((rfmo > 0) && (rfmo <= 10)) {
                document.getElementById('sts').innerHTML=" Category: Extreme low fat";
            }
            else if((rfmo >= 11 ) && (rfmo <= 13)){
                document.getElementById('sts').innerHTML=" Category: Essential fat";
            } 
            else if((rfmo >= 14 ) && (rfmo <= 20)){
                document.getElementById('sts').innerHTML=" Category: Athlete";
            } 
            else if((rfmo >= 21 ) && (rfmo <= 24)){
                document.getElementById('sts').innerHTML=" Category: Fitness";
            } 
            else if((rfmo >= 25 ) && (rfmo <= 31)){
                document.getElementById('sts').innerHTML=" Category: Average";
            } 
            else if((rfmo >= 32 ) && (rfmo <= 50)){
                document.getElementById('sts').innerHTML=" Category: Obese";
            } 
        }
    }
}

$(".first").click(function () {
    $(".wrapper2").show();
    $(".wrapper3").hide();
  });
  $(".second").click(function () {
    $(".wrapper3").show();
    $(".wrapper2").hide();
  });