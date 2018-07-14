export default class ToggleClass {
	constructor(el) {

		// IE 10+
		el.addEventListener('click', function(event) {
			event.preventDefault();

			if (el.classList.contains('active')) {
				el.classList.remove('active');
			} else {
				el.classList.add('active');
			}
		})
	}
}