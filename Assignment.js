
function kilometerToMeter(kilometer){
    var convertMeter=kilometer*1000; //calculate meter value
    return convertMeter;  //return function
}
var meter=kilometerToMeter(5);
console.log(meter) //output

function budgetCalculator(ghori,mobile,laptop){
    var costForGhori=ghori*50;
    var costForMobile=mobile*100;
    var costForLaptop=laptop*500;
    var totalCost=costForGhori+costForMobile+costForLaptop;
    return totalCost;
}
var totalAmount=budgetCalculator(5,7.9); //function call
console.log(totalAmount);


//variable set
var price1=100;
var price2=80;
var price3=50;
function hotelCost(night){
    for(var i=0; i<=night; i++){
        if(i<=10){              
            var cost=night*100; 
        }
        else if(i<=20){
            var cost=cost+80-100;  
        }
        else{
            var cost=cost+50-100;  
        }
    }
    return cost;
}
var hotelCostAmount=hotelCost();  // function call
console.log(hotelCostAmount);



function megaFriend(friend){
    var maxlength=friend[0];
for(var i=1; i<friend.length;i++){  
    if (friend[i].length>maxlength.length){  //conditional statement
        maxlength=friend[i];
    }
}
return maxlength;
}
var bigName=megaFriend();
console.log(bigName);