let totalamount = prompt("Enter your total shopping amounnt:");

if (totalamount >10000) {
   let discount = (20*totalamount)/100;
   let fianlamount = totalamount - discount;
    console.log("Orginal Price:"+ totalamount);
   console.log("DISCOUNT:"+ discount);
   console.log("Final Amount:"+ fianlamount);
} 

else if (totalamount > 5000 && totalamount <= 10000){
    let discount = (10*totalamount)/100;
   let fianlamount = totalamount - discount;
   console.log("Orginal Price:"+ totalamount);
   console.log("DISCOUNT:"+ discount);
   console.log("Final Amount:"+ fianlamount);
}

else{
    console.log("DISCOUNT: No Discount")
    console.log("Final Amount:"+ totalamount);

}