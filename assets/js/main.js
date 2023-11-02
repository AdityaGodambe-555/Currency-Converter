//alert("GGGGGGG");

function convert(){
	var frm,to,amount;
	
	frm=document.getElementById('from');
	to=document.getElementById('to');
	amount=document.getElementById('amt');
	// res=document.getElementById('result');
	cu=document.getElementById('curr');
	/*
	Access Object
	document.write(amount+"<br>");
	document.write(to+"<br>");
	document.write(frm+"<br>");
	*/
	
	//Acess value
	// document.write("From : "+frm.value+"<br>");
	// document.write("To : "+to.value+"<br>");
	// document.write("Amount : "+amount.value+"<br>");
	
	var url='https://v6.exchangerate-api.com/v6/c984b9580e718a143912652e/latest/'+frm.value;
	fetch(url)
	.then(function(res){
		/*document.write(res.json());*/
		return res.json();
	})
	.then(function(data){
		// document.write(data+"<br>");
		// document.write(data['result']+"<br>");
		// document.write(data['base_code']+"<br>");
		var cr=data['conversion_rates'];
		cf=cr[to.value];

		var famt=cf*amount.value;
		//document.write(famt);
		// res.innerHTML=" " +famt;
		cu.innerHTML=amount.value+" "+frm.value+" is equal to " +famt+" "+to.value;
	});
	
}
