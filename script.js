//your JS code here. If required.
const btnHTML = document.getElementById('btn');
const numHTML = document.getElementById('ip');
const outputHTML = document.getElementById('output');

const start = () => {
	calCulate1(numHTML.value).then((data)=>{
		outputHTML.innerText = `Result: ${data}`;
		calCulate2(data).then((data2)=>{
			outputHTML.innerText = `Result: ${data2}`;
			calCulate3(data2).then((data3)=>{
				outputHTML.innerText = `Result: ${data3}`;
				calCulate4(data3).then((data4)=>{
					outputHTML.innerText = `Result: ${data4}`;
					calCulate5(data4).then((data5)=>{
						outputHTML.innerText = `Result: ${data5}`;
						calCulate6(data5).then((data6)=>{
							outputHTML.innerText = `Final Result: ${data6}`;
						})
					})
				})
			})
		})
	})
}

const calCulate1 = (num1) => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(num1);
		}, 2000);
	})
}

const calCulate2 = (num2) => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(num2);
		}, 2000);
	})
}

const calCulate3 = (num3) => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(num3*2);
		}, 1000);
	})
}

const calCulate4 = (num4) => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(num4-3);
		}, 1000);
	})
}

const calCulate5 = (num5) => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(num5/2);
		}, 1000);
	})
}
const calCulate6 = (num6) => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(num6+10);
		}, 1000);
	})
}