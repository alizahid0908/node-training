function placeOrder(orderNumber){
	console.log("Customer Order", orderNumber)



	cookAndDeliverFood(function (){
		console.log("Delivered Food Order:", orderNumber)
	})
}


function cookAndDeliverFood(callback){
	setTimeout(callback, 5000)
}



placeOrder(1)
placeOrder(2)
placeOrder(3)
placeOrder(4)
