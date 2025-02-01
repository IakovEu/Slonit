function sumDonations(u) {
	let x = 0;
	u.forEach(i => {
	  x += i;
	});
	return x;
  }
  
  let donations = [10000, 20000, 30000];
  console.log(sumDonations(donations));


