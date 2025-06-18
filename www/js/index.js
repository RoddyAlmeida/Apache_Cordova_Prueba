// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en dispositivos/emuladores Ripple o Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Controlar la pausa de Cordova y reanudar eventos
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova se ha cargado. Haga aquí las inicializaciones que necesiten Cordova.
        document.getElementById("btnBuscar").addEventListener("click", BuscarUsuario, false);
        document.getElementById("btnCargar").addEventListener("click", CargarLista, false);
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };

    //FUNCIONES PERSONALIZADAS
    function BuscarUsuario() {
        var usuario = document.getElementById("txtNombre").value;
        /* Lo comentado son pruebas previas */
        /*if (usuario == "") {
            alert("Por favor, ingrese un nombre de usuario.");
        } else {
            alert("Bienvenido, " + usuario + "!");
        }*/
       /*
        if (usuario == "") {
            document.getElementById("divResultado").innerHTML = "ingrese usuario: ";
        } else {
            //Agregando event Ajax
            var url = "https://rickandmortyapi.com/api/character/?name=" + encodeURIComponent(usuario);
            console.log("Intentando buscar en URL: " + url);
            
            $.ajax({
                type: "GET",
                url: url,
                crossDomain: true,
                cache: false,
                success: function (result) {
                    console.log("Respuesta recibida:", result);
                    if (result.results && result.results.length > 0) {
                        let personaje = result.results[0];
                        document.getElementById("divResultado").innerHTML =
                            "Personaje encontrado:<br>" +
                            "Nombre: " + personaje.name + "<br>" +
                            "Especie: " + personaje.species + "<br>" +
                            "Estado: " + personaje.status + "<br>" +
                            "<img src='" + personaje.image + "' style='max-width:200px;'>";
                    } else {
                        document.getElementById("divResultado").innerHTML =
                            "Personaje no encontrado. Intenta con: Rick, Morty, Summer, etc.";
                    }
                },
                error: function (xhr, status, error) {
                    console.log("Error completo:", {xhr: xhr, status: status, error: error});
                    document.getElementById("divResultado").innerHTML = 
                        "Error al buscar el personaje:<br>" +
                        "Status: " + status + "<br>" +
                        "Error: " + error + "<br>" +
                        "URL: " + url;
                }
            });
        }
    }*/
        if (usuario == "") {
            document.getElementById("divResultado").innerHTML = "ingrese usuario: ";
             } else {
                //Agregando event Ajax
                $.ajax({
                    type: "GET",
                    url: "https://jsonplaceholder.typicode.com/users?username=" + usuario,
                    crossDomain: true,
                    cache: false,
                    success: function (result) {
                    if (result.length > 0) {
                        document.getElementById("divResultado").innerHTML =
                            "Bienvenido, " + result[0].username + " (" + result[0].name + ")!";
                    } else {
                        document.getElementById("divResultado").innerHTML =
                            "Usuario no encontrado.";
                         }
                    },
                    error: function (result) {
                        alert("Error al buscar el usuario: " + result.statusText);
                    }
           });
        }
    };

    function CargarLista() {
        var cadena = "<table border=0 cellpadding=2 cellspacing=0><tr><th>Nombre</th><th>Direccion</th><th>Telefono</th></tr>";
        //Agregando evento Ajax
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            crossDomain: true,
            cache: false,
            contentType: "application/json; charset=utf-8",
            success: function (result) {
                $.each(result, function(i, usuario) {
                    cadena = cadena + "<tr>" +
                        "<td>" + usuario.name + "</td>" +
                        "<td>" + usuario.address.street + "</td>" +
                        "<td>" + usuario.phone + "</td></tr>";
                });
                cadena = cadena + "</table>";
                $("#divLista").append(cadena);
            },
            error: function (result) {
                alert("Error al cargar la lista: " + result.statusText);
            }
        });
    }
})();
