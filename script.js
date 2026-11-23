// Esperar a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    
    // Selección de elementos del DOM
    const form = document.getElementById('download-form');
    const fileSizeInput = document.getElementById('file-size');
    const netSpeedInput = document.getElementById('net-speed');
    const resultBox = document.getElementById('result-box');

    // Evento al enviar el formulario
    form.addEventListener('submit', function(event) {
        // Evitar que la página se recargue
        event.preventDefault();

        // Obtener los valores ingresados y convertirlos a números decimales
        const fileSizeGB = parseFloat(fileSizeInput.value);
        const speedMbps = parseFloat(netSpeedInput.value);

        // Validar que los datos sean válidos y mayores a cero
        if (isNaN(fileSizeGB) || isNaN(speedMbps) || fileSizeGB <= 0 || speedMbps <= 0) {
            alert('Por favor, ingresa valores numéricos válidos mayores a 0.');
            return;
        }

        // Conversión de unidades de telecomunicaciones:
        // 1 Gigabyte (GB) = 1024 Megabytes (MB)
        // 1 Megabyte (MB) = 8 Megabits (Mb)
        const totalMegabits = fileSizeGB * 1024 * 8;
        
        // Calcular el tiempo total en segundos
        const totalSeconds = totalMegabits / speedMbps;

        // Formatear los segundos a horas, minutos y segundos
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        // Mostrar el resultado en el HTML
        resultBox.innerHTML = `Tiempo estimado de descarga: <span class="highlight">${hours}h ${minutes}m ${seconds}s</span> (a una tasa real de ${(speedMbps / 8).toFixed(2)} MB/s).`;
        resultBox.classList.remove('hidden');
    });

});