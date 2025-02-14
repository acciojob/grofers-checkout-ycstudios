const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".price");
    let totalPrice = 0;
    prices.forEach(price => {
        totalPrice += parseInt(price.textContent);
    });
    const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");
	totalCell.id = "ans";
    totalCell.textContent = `Total Price: Rs ${totalPrice}`;
    totalRow.append(totalCell,totalRow)
};

getSumBtn.addEventListener("click", getSum);
