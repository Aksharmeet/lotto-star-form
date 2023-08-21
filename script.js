function myFunction(e) {
	e.preventDefault()
	const idNumber = document.getElementById('id-number').value
	const name = document.getElementById('name').value
	const surname = document.getElementById('surname').value
	const email = document.getElementById('email').value
	const mobile = document.getElementById('mobile').value

	// validate id number
	if (typeof Number(idNumber) !== 'number' || idNumber.length < 1) {
		const idNumberError = document.getElementById('id-number-error')
		idNumberError.innerHTML = 'Please enter a valid ID number'
		return
	} else {
		const idNumberError = document.getElementById('id-number-error')
		idNumberError.innerHTML = ''
	}

	// validate name
	if (typeof name !== 'string' || name.length < 1) {
		const nameError = document.getElementById('name-error')
		nameError.innerHTML = 'Please enter a valid name'
		return
	} else {
		const nameError = document.getElementById('name-error')
		nameError.innerHTML = ''
	}

	// validate surname
	if (typeof surname !== 'string' || surname.length < 1) {
		const surnameError = document.getElementById('surname-error')
		surnameError.innerHTML = 'Please enter a valid surname'
		return
	} else {
		const surnameError = document.getElementById('surname-error')
		surnameError.innerHTML = ''
	}

	// validate email
	// use regex to validate email

	let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
	if (typeof email !== 'string' || email.length < 5) {
		const emailError = document.getElementById('email-error')
		emailError.innerHTML = 'Please enter a valid email'
		return
	} else if (!email.includes('@')) {
		const emailError = document.getElementById('email-error')
		emailError.innerHTML = 'Please enter a valid email'
		return
	} else if (!regex.test(email)) {
		const emailError = document.getElementById('email-error')
		emailError.innerHTML = 'Please enter a valid email'
		return
	} else {
		const emailError = document.getElementById('email-error')
		emailError.innerHTML = ''
	}

	// validate mobile
	if (typeof Number(mobile) !== 'number' || mobile.length < 10) {
		const mobileError = document.getElementById('mobile-error')
		mobileError.innerHTML = 'Please enter a valid mobile number'
		return
	} else {
		const mobileError = document.getElementById('mobile-error')
		mobileError.innerHTML = ''
	}

	window.location.href = '/form-submitted.html'
}
