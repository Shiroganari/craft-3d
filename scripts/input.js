// Restricts input for the set of matched elements to the given inputFilter function.
(function($) {
    $.fn.inputFilter = function(inputFilter) {
        return this.on('input keydown keyup mousedown mouseup select contextmenu drop', function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };

    $('#product-quantity').inputFilter(function(value) {
        return /^\d*$/.test(value); // Allow digits only, using a RegExp
    });
}(jQuery));

const inputs = document.getElementsByClassName('form__input');

for (let i = 0; i < inputs.length; i++)
{
    inputs[i].addEventListener('input', () => {
        let inputParent = inputs[i].parentNode;

        if (inputs[i].value == '') {
            inputParent.classList.remove('active');
        } else {
            inputParent.classList.add('active');
        }
    })
}