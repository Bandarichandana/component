let myCheckbox = document.querySelector(".switch input"),
  duration = document.querySelector(".month"),
  price = document.querySelector(".price .fixed-price"),
  switcher = document.querySelector(".switch"),
  range = document.querySelector(".myrange");

switcher.onclick = function () {
  if (myCheckbox.checked == true) {
    let priceInt = parseInt(price.textContent);
    price.textContent = `${(priceInt - priceInt * 0.25) * 12}`;
    duration.textContent = `/year`;
  } else {
    updatePrice();
    duration.textContent = `/month`;
  }
};

let pageViews = document.querySelector(".page-views span");

range.addEventListener("input", updatePrice);

function updatePrice() {
  if (range.value == 1) {
    if (myCheckbox.checked == true) {
      price.textContent = `${(8 - 8 * 0.25) * 12}`;
    } else {
      price.textContent = 8;
    }

    pageViews.textContent = "10k";
  }

  if (range.value == 2) {
    if (myCheckbox.checked == true) {
      price.textContent = 108;
    } else {
      price.textContent = 12;
    }

    pageViews.textContent = "50k";
  }

  if (range.value == 3) {
    if (myCheckbox.checked == true) {
      price.textContent = 144;
    } else {
      price.textContent = 16;
    }

    pageViews.textContent = "100k";
  }
  if (range.value == 4) {
    if (myCheckbox.checked == true) {
      price.textContent = 216;
    } else {
      price.textContent = 24;
    }

    pageViews.textContent = "500k";
  }
  if (range.value == 5) {
    if (myCheckbox.checked == true) {
      price.textContent = 324;
    } else {
      price.textContent = 36;
    }

    pageViews.textContent = "1M";
  }
}

const startTrailButton = document.querySelector(".start button");
startTrailButton.addEventListener("click", function () {
    const selectedRange = range.value;
    let pageviews;
    let calculatedPrice;

    if (selectedRange == 1) {
        pageviews = "10k";
        calculatedPrice = myCheckbox.checked ? ((8 - (8 * 0.25)) * 12).toFixed(2) : "8.00";
    } else if (selectedRange == 2) {
        pageviews = "50k";
        calculatedPrice = myCheckbox.checked ? "108.00" : "12.00";
    } else if (selectedRange == 3) {
        pageviews = "100k";
        calculatedPrice = myCheckbox.checked ? "144.00" : "16.00";
    } else if (selectedRange == 4) {
        pageviews = "500k";
        calculatedPrice = myCheckbox.checked ? "216.00" : "24.00";
    } else if (selectedRange == 5) {
        pageviews = "1M";
        calculatedPrice = myCheckbox.checked ? "324.00" : "36.00";
    }
    const url = `trailPage.html?pageviews=${pageviews}&price=${calculatedPrice}`;

    window.location.href = url;
});

