    let unfollowButtonText = "Following";
    let unfollowConfirmationText = "Unfollow";
    let selector = `button:contains('${unfollowButtonText}')`;
    let currentTime = 0;
    let step = 30000;
    let unfollowButtons = $(selector);
    let totalUnfollowButtons = unfollowButtons.length;

    if (!totalUnfollowButtons) {
        alert("Error: no se encontraron botones de seguimiento, tal vez cambie el texto del botón?");
    }

    unfollowButtons.each(function (index) {
        let button = $(this);

        setTimeout(function () {
            (function (i) {
                console.log(`Unfollowing ${i} of ${totalUnfollowButtons}`);

                if (i == totalUnfollowButtons) {
                    console.log("Script finalizado con exito!");
                }

                button.trigger("click");

                // Importante: recientemente, se agregó un cuadro de diálogo de confirmación al hacer clic en
                // en dejar de seguir, así que simplemente haga clic en el botón de confirmación para dejar de seguir al usuario
                setTimeout(function () {
                    var btn = $(`button:contains('${unfollowConfirmationText}')`);

                    if (btn) {
                        btn.trigger("click");
                    }
                }, 100);
            })(index + 1);
        }, currentTime);

        currentTime += step;
    });;

    // Injecta el Script !
    document.getElementsByTagName('head')[0].appendChild(jqueryScript);