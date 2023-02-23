const bars = document.querySelectorAll('.chart__bar-item .progress');

let max = 0;

bars.forEach((bar) => {


    // if (bar.dataset.width > max) {
    //     max = bar.dataset.width;
    // }
    // console.log(bar.dataset.width);

    // console.log(Math.max(bar.dataset.width));

    // for (let item of bar.dataset.width) {
    //     queue += item;
    //     console.log(item);
    // }


    // const min = Math.min(queue);
    // console.log('min: ' + min); // 👉️ 1


    let value = `${Math.round(bar.dataset.width * 100 / 1.22)}`;

    let contador = 0;
    let interval = setInterval(function () {
        bar.style.width = contador + '%';

        if (value < 0) {

            bar.style.width = -(contador + '%');
            clearInterval(interval);

            // console.log(bars);
        }

        if (contador == value) {
            clearInterval(interval);
        }
        contador++;
    }, 10);
})


fetch('/assets/js/district.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (districts) {
        let placeholder = document.querySelector("#district");
        let out = "";

        for (let district of districts) {
            out += `
            <option value="${district.dcode}">${district.name}</option>
        `;
        }

        placeholder.innerHTML = out;
    })



fetch('/assets/js/year.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (years) {
        let placeholderstartYear = document.querySelector("#startYear");
        let placeholderendYear = document.querySelector("#endYear");
        let out = "";

        for (let year in years) {

            out += `
            <option value="${years[year]}">${years[year]}</option>
        `;
        }

        placeholderstartYear.innerHTML = out;
        placeholderendYear.innerHTML = out;
    })