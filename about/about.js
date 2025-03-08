const GAMEDEV_START_YEAR = 2020;
var gameDevYearsElement = document.getElementById('gamedev-years');
var currentYear = new Date().getFullYear();


gameDevYearsElement.innerText = currentYear - GAMEDEV_START_YEAR;
gameDevYearsElement.innerText += " years";