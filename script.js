document.getElementById('btn-location').addEventListener('click', function() {  
    if (navigator.geolocation) {  
        navigator.geolocation.getCurrentPosition(function(position) {  
            const latitude = position.coords.latitude;  
            const longitude = position.coords.longitude;  

            // Enviar a un servidor - por ahora solo mostrar en la consola  
            console.log(`Ubicación: Latitud ${latitude}, Longitud ${longitude}`);  
            document.getElementById('response').innerText = `Ubicación obtenida: Latitud ${latitude}, Longitud ${longitude}`;  
        }, function() {  
            alert('Error al obtener la ubicación.');  
        });  
    } else {  
        alert('Geolocalización no soportada por este navegador.');  
    }  
});