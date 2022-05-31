const myChart = document.querySelector("#myChart").getContext("2d");

const chartData = async () => {
  try {
    const response = await fetch("assests/data.json");
    return await response.json();
  } catch (err) {
    console.log("Promise rejected", err);
  }
};

chartData().then((data) => {
  const days = [];
  const amount = [];

  for (let i = 0; i < data.length; i++) {
    days.push(data[i].day);
    amount.push(data[i].amount);
  }

  const barChart = new Chart(myChart, {
    type: "bar",
    data: {
      labels: days,
      datasets: [
        {
          label: "",
          data: amount,
          backgroundColor: ["hsl(10, 79%, 65%)"],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
      },
    },
  });
});
