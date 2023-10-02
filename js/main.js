let elForm = document.querySelector(".form");
let elNameInput = document.querySelector(".form__name");
let elMobileInput = document.querySelector(".form__mobile");
let elEmailInput = document.querySelector(".form__email");
let elMessageInput = document.querySelector(".form__message");
let elButton = document.querySelector(".form__btn");

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	let nameValue = elNameInput.value.trim();
	let mobileValue = elMobileInput.value.trim();
	let emailValue = elEmailInput.value.trim();
	let messageValue = elMessageInput.value.trim();
	let buttonValue = elButton.value.trim();

    if (!isNaN(nameValue)) {
		alert("Rostanam ismizda raqam ishtirok etgan bo'sa o'zimmi osaman😕");
	}

    if (nameValue.length < 2 || nameValue.length > 30) {
		alert("Ismingizni to'g'ri kiriting!");
		return;
	}

    if (!mobileValue.startsWith('+998')) {
		alert("Telefon raqamingizni to'g'ri kiriting!");
		return;
	}

    if (!mobileValue.length == 13) {
		alert("Telefon raqamingizni to'g'ri kiriting!");
		return;
	}

    if (!emailValue.endsWith('@gmail.com')) {
		alert("Emailni to'g'ri kiriting!");
		return;
	}

	if (!emailValue.toLowerCase()) {
		alert("Email kichik harflardan iborat bo'lsin!");
		return;
	}

    if (messageValue.length > 50 || messageValue < 2) {
		alert("Xabaringizdagi harflar soni 5 tadan kam bo'lmasligi va 50 tadan oshmasligi lozim!");
		return;
	}
});