let getNum = document.getElementById("convNumber")

let lenStmt = document.getElementById("length")
let volStmt = document.getElementById("volume")
let massStmt = document.getElementById("Mass")


 function convertUnit(){
    //  let num = convertNum.textContent
    //  num = num.toFixed(3)
    //  console.log(num)
    lenStmt.textContent = "0 meters = 0.000 feet | 0 feet = 0.000 meters"
    volStmt.textContent = "0 liters = 0.000 gallons | 0 liters = 0.000 gallons"
    massStmt.textContent = "0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos"
 }
 
 getNum.addEventListener("keydown", function(e){
    e.preventDefault()
    var num = ""
    if(e.key >= 0 || e.key <= 9 || e.key === "Backspace" || e.key === "Delete"){
        if(e.key != "Backspace"){
            if(getNum.value === "0"){
                getNum.value = e.key
            }
            else{
                getNum.value += ""+ e.key
            }
            num = getNum.value
            convertLen(num)
            convertVol(num)
            convertMass(num)
        }
        else{
            num = getNum.value
            if(num === "0"){
                alert("Input cannot be empty!")
            }
            else if(num != "0" && num.length === 1){
                getNum.value = "0"
                convertUnit()
            }
            else{
                num = getNum.value
                num = num.slice(0,-1)
                getNum.value = num
                convertLen(num)
                convertVol(num)
                convertMass(num)
            }
        }
        
    }
    else{
        console.log(e.key)
        alert("Please enter digits from 0-9")
     }   
    
 })
 
 function convertLen(num){
    // console.log(num)
     num = parseInt(num, 10)
     console.log("radix", num)
     let feet = num * 3.2808
     let meters = num * 0.3048
     let length_ = ""
    if (num === 1){
        length_ = num + " meter" + " = " +feet.toFixed(3) +" foot"+ " | " + num + " foot"  + " = "+ meters.toFixed(3) + " meter"
    }
     else{
         length_ = num + " meters" + " = " +feet.toFixed(3) +" feet"+ " | " + num + " feet"  + " = "+ meters.toFixed(3) + " meters"
     }
     document.getElementById("length").textContent = length_ 
 }
 
 function convertVol(num){
     num = parseInt(num)
     let gallons = num * 0.2641
     let liters = num * 3.7854
     let vol_ = ""
    if (num === 1){
        vol_ = num + " liter" + " = " +gallons.toFixed(3) +" gallon"+ " | " + num + " liter"  + " = "+ liters.toFixed(3) + " gallon"
    }
    else{
       vol_ = num + " liters" + " = " +gallons.toFixed(3) +" gallons"+ " | " + num + " liters"  + " = "+ liters.toFixed(3) + " gallons" 
    } 
     document.getElementById("volume").textContent = vol_ 
 }
 
 function convertMass(num){
      num = parseInt(num)
      let kilos = num * 2.2046
      let pounds = num * 0.4535
      let mass_ =""
      if(num === 1){
          mass_ = num + " kilo" + " = " + pounds.toFixed(3) +" pound"+ " | " + num + " pound"  + " = "+ kilos.toFixed(3) + " kilo"
      }
      else{
          mass_ = num + " kilos" + " = " + pounds.toFixed(3) +" pounds"+ " | " + num + " pounds"  + " = "+ kilos.toFixed(3) + " kilos"
      }
      
      document.getElementById("Mass").textContent = mass_
 }