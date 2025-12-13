"use strict";

const scoreElements = document.querySelectorAll('.list_item_score')
const totalElement = document.querySelector('.total')

const scores = Array.from (scoreElements).map(element => Number(element.innerHTML))

const total = scores.reduce((sum,currentValue) => sum + currentValue)

totalElement.innerHTML = String(total)
