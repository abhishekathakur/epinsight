(function () {

    "use strict";

    document.addEventListener("deviceready", function () {
        FastClick.attach(document.body);
        StatusBar.overlaysWebView(false);
    }, false);


    // Show/hide menu toggle
    $('#btn-menu').click(function () {
        if ($('#container').hasClass('offset')) {
            $('#container').removeClass('offset');
        } else {
            $('#container').addClass('offset');
        }
        return false;
    });

    // Basic view routing
    $(window).on('hashchange', route);

    function route() {
        var hash = window.location.hash;
        if (hash === "#dashboard/1") {
        	param=lvl;
        	
            dashboard1.render();
        } else if (hash === "#dashboard/2") {
        	param=lvl;
            dashboard2.render();
        } else if (hash === "#dashboard/3") {
        	param=lvl;
            dashboard3.render();
        }
        else if (hash === "#dashboard/4") {
        	param=lvl;
            dashboard4.render();
        }
    }

   dashboard4.render();

}());