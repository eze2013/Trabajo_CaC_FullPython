document.addEventListener("DOMContentLoaded", function () {
    const formReserva = document.getElementById("form-reserva");
    const btnSaveReserva = document.getElementById("btn-save-reserva");
    const tbodyTableReservas = document.getElementById("tbody-table-reservas");

    btnSaveReserva.addEventListener("click", function () {
        const reservaData = {
            name_cliente: document.getElementById("nombre").value,
            lastname_cliente: document.getElementById("apellido").value,
            email_cliente: document.getElementById("mail").value,
            phone: document.getElementById("telefono").value,
            num_adultos: document.getElementById("adultos").value,
            num_menore: document.getElementById("menores").value,
            fecha_entrada: document.getElementById("fecha_llegada").value,
            fecha_salida: document.getElementById("fecha_salida").value,
            habitaciones: document.querySelector('input[name="habitaciones"]:checked').value
        };

        const idReserva = document.getElementById("id-reserva").value;

        if (idReserva) {
            // Update existing reservation
            fetch(`http://127.0.0.1:5000/api/reservas_room/${idReserva}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reservaData)
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                loadReservas();
                formReserva.reset();
            })
            .catch(error => console.error('Error:', error));
        } else {
            // Create new reservation
            fetch("http://127.0.0.1:5000/api/reservas_room/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reservaData)
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                loadReservas();
                formReserva.reset();
            })
            .catch(error => console.error('Error:', error));
        }
    });

    function loadReservas() {
        fetch("http://127.0.0.1:5000/api/reservas_room/")
        .then(response => response.json())
        .then(data => {
            tbodyTableReservas.innerHTML = "";
            data.forEach(reserva => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${reserva.name_cliente}</td>
                    <td>${reserva.lastname_cliente}</td>
                    <td>${reserva.email_cliente}</td>
                    <td>${reserva.phone}</td>
                    <td>${reserva.num_adultos}</td>
                    <td>${reserva.num_menore}</td>
                    <td>${reserva.fecha_entrada}</td>
                    <td>${reserva.fecha_salida}</td>
                    <td>${reserva.habitaciones}</td>
                    <td>
                        <button class="btn-modificar" data-id="${reserva.id_reserva_room}">Modificar</button>
                        <button class="btn-eliminar" data-id="${reserva.id_reserva_room}">Eliminar</button>
                    </td>
                `;
                tbodyTableReservas.appendChild(tr);
            });
            addEventListeners();
        })
        .catch(error => console.error('Error:', error));
    }

    function addEventListeners() {
        document.querySelectorAll(".btn-modificar").forEach(button => {
            button.addEventListener("click", function () {
                const idReserva = this.getAttribute("data-id");
                fetch(`http://127.0.0.1:5000/api/reservas_room/${idReserva}`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById("id-reserva").value = data.id_reserva_room;
                    document.getElementById("nombre").value = data.name_cliente;
                    document.getElementById("apellido").value = data.lastname_cliente;
                    document.getElementById("mail").value = data.email_cliente;
                    document.getElementById("telefono").value = data.phone;
                    document.getElementById("adultos").value = data.num_adultos;
                    document.getElementById("menores").value = data.num_menore;
                    document.getElementById("fecha_llegada").value = data.fecha_entrada;
                    document.getElementById("fecha_salida").value = data.fecha_salida;
                    document.querySelector(`input[name="habitaciones"][value="${data.habitaciones}"]`).checked = true;
                })
                .catch(error => console.error('Error:', error));
            });
        });

        document.querySelectorAll(".btn-eliminar").forEach(button => {
            button.addEventListener("click", function () {
                const idReserva = this.getAttribute("data-id");
                if (confirm("¿Estás seguro de que deseas eliminar esta reserva?")) {
                    fetch(`http://127.0.0.1:5000/api/reservas_room/${idReserva}`, {
                        method: "DELETE"
                    })
                    .then(response => response.json())
                    .then(data => {
                        alert(data.message);
                        loadReservas();
                    })
                    .catch(error => console.error('Error:', error));
                }
            });
        });
    }

    // Cargar todas las reservas al cargar la página
    loadReservas();
});
