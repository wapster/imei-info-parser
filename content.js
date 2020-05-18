// Скрипт, который работает на всех загружаемых страницах,
// либо на страницах указанных в файле manifest.json

let url = window.location.search;
let imei = url.slice(6);

let tac = imei.slice(0, 8);

let brand = $('.container:first').find('h2:first').text();
let model = $('.container').find('h1').text();
model = brand + ' ' + model;

// Тип устройства
let device_type = $('#basic').find('table:first').find('tr:first').find('td:eq(1)').text();

// Дата релиза
let released;
if ( $("#basic:contains('Released:')" ).length) {
	released = $('#basic').find('table:first').find('tr:eq(2)').find('td:eq(1)').text();
} else {
	released = 'N/A';
}

// Кол-во sim-карт
// у Samsung'ов пишет 1, потому что второй слот это 
// одновременно либо sim, либо карта памяти
let sim_count;
if ( $("#basic:contains('DualSIM:')" ).length) {
	sim_count = 2;
} else {
	sim_count = 1;
}


let info = {
	tac: tac,
	model: model,
	device_type: device_type,
	released: released,
	sim_count: sim_count,
	imei: imei
}

// Сохраняем данные
localStorage.setItem(tac, JSON.stringify(info));
