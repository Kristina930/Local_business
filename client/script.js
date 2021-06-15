'use strict';


    const div = document.querySelectorAll('div');

            div.forEach(function(div) {
            div.addEventListener('click', divClickHandler);
        });

        function divClickHandler(event) {

            if (event.target.id === "formModal") {
                console.log(event.target.id);
            }
            if (event.target.classList.contains("ellipse")) {
                console.log(event.target.classList);
            }
        }
    

        let divEl = document.querySelector('.button');
            divEl.addEventListener('click', function () {
                Swal.fire({
                    title: 'Your data has been saved!',
                    text: 'Expect an operator to contact you soon.',
                    icon: 'info',
                    confirmDivText: 'Ok'
                });
            })

        let divFoot = document.querySelector('.foot-text-sub');
            divFoot.addEventListener('click', function () {
                Swal.fire({
                    title: 'Your data has been saved!',
                    text: 'Expect an operator to contact you soon.',
                    icon: 'info',
                    confirmDivText: 'Ok'
                });
            });


