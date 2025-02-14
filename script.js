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
    totalCell.textContent = `Total Price: Rs ${totalPrice}`;
	totalCell.id = "ans";
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
