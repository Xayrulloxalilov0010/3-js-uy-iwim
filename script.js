let son = +prompt('son kiriting,biz uni juft yoki toqligini bilib beramiz')
while (isNaN(son)) {
    son = +prompt('Siz son kritmadingiz')
}
while (son == 0) {
    son = +prompt('Siz son kiritmadingiz')
}
let raqam = +prompt('Sonning darajasini kiriting')
while (isNaN(raqam)) {
    raqam = +prompt("Darajani son ko'rinishida kiriting ")
}
while (raqam == 0) {
    raqam = +prompt("Darajani son ko'rinishida kiriting ")
}
son = son ** raqam
alert('Javob: ' + son)