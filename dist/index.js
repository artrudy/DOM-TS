var forms = document.querySelectorAll("form");
var email = document.querySelector("#email");
var title = document.querySelector("#title");
var text = document.querySelector("#text");
var checkbox = document.querySelector("#checkbox");
var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false
};
forms.forEach(function (form) {
    return form.addEventListener("submit", function (e) {
        var _a, _b, _c, _d;
        e.preventDefault();
        formData.email = (_a = email === null || email === void 0 ? void 0 : email.value) !== null && _a !== void 0 ? _a : "";
        formData.title = (_b = title === null || title === void 0 ? void 0 : title.value) !== null && _b !== void 0 ? _b : "";
        formData.text = (_c = text === null || text === void 0 ? void 0 : text.value) !== null && _c !== void 0 ? _c : "";
        formData.checkbox = (_d = checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked) !== null && _d !== void 0 ? _d : false;
        if (validateFormData(formData)) {
            checkFormData(formData);
        }
    });
});
console.log(formData);
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(data) {
    // Если каждое из свойств объекта правдиво...
    if (Object.values(data).every(function (value) { return value; })) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    if (emails.some(function (e) { return e; })) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
