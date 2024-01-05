const chart = document.querySelector("#chart");
// console.log(chart);

new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "BTC",
        data: [
          29324, 33537, 49631, 59095, 36684, 33572, 39974, 48847, 48118, 61004,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "ETH",
        data: [
          31500, 42000, 88000, 46002, 32698, 5000, 3000, 18656, 24832, 36844,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    
    ],
  },
  options: {
    responsive: true,
  },
});

// shw or hidee toggle
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document. querySelector('#close-btn');
const sidebar = document.querySelector('aside');
menuBtn.addEventListener( 'click', () => {
  sidebar.style.display = 'block';
});

closeBtn.addEventListener( 'click', () => {
  sidebar.style.display = 'none';
})


//changing of themes
const themeBtn = document.querySelector('.theme-btn');
console.log(themeBtn);
themeBtn.addEventListener('click', () => {
  document.body.classList.add('dark-theme');
   
  themeBtn.querySelector('i:first-child').classList.toggle('active');
  themeBtn.querySelector('i:last-child').classList.toggle('active');
})
 