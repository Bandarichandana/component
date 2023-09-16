const urlParams = new URLSearchParams(window.location.search);
const pageviews = urlParams.get("pageviews");
const calculatedPrice = urlParams.get("price");


document.getElementById("selectedRange").textContent = ` Pageviews: ${pageviews}`;
document.getElementById("calculatedPrice").textContent = `Amount to Pay: $${calculatedPrice}`;
