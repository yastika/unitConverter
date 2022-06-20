let getNum = document.getElementById("convNumber")
// let convertNum = parseInt(getNum)
// console.log(convertNum)

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
     if(e.key === "Enter"){
     num = parseInt(getNum.value)
     console.log(num)
     convertLen(num)
     convertVol(num)
     convertMass(num)
     }
 })
 
 function convertLen(num){
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