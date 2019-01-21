(function (window, document) {

    var el;

    window.insertAfter = (newNode, referenceNode) => {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    window.setAttribute = (el, attr, value) => {
        el.setAttribute(attr, value);
    }


    window.removeAttribute = (el, attr) => {
        el.removeAttribute(attr);
    }

    window.toggleClass = false;


    window.onload = () => {
        // el = document.getElementById('dropdown-menu');
        el = document.querySelector('.dropdown-menu'); // change to queryselectorAll
    }

    window.show = () => {
        if (toggleClass === true) {
            el.classList.toggle('show', false);
        } else {
            el.classList.toggle('show', true);
        }
        toggleClass = !toggleClass;
    }

    window.clearAll = () => {
        // var el = document.getElementById('dropdown-menu');
        var part = el.getElementsByTagName('input');
        for (var i = 0; i < part.length; i++) {
            removeAttribute(part[i], 'checked');
            // part[i].removeAttribute('checked');
            part[i].nextElementSibling.classList.remove('checkmark');
            // part[i].nextElementSibling.classList.remove('checkmar-bg');
        }
    }

    window.selectAll = () => {
        // var el = document.getElementById('dropdown-menu');
        // console.log(el);
        var part = el.getElementsByTagName('input');
        for (var i = 0; i < part.length; i++) {
            setAttribute(part[i], 'checked', 'checked');
            // part[i].setAttribute('checked', 'checked');
            part[i].nextElementSibling.classList.add('checkmark');
            // part[i].nextElementSibling.classList.add('checkmar-bg');
            // console.log(part[i].nextElementSibling);
        }
    }


    window.onclick = function (event) {
        if (event.target.matches('html') || event.target.matches('body')) {
            var dropdowns = document.getElementsByClassName("dropdown-menu");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
})(window, document);