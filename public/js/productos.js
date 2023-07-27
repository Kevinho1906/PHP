function create() {

    axios
        .post("/producto", {
            nombre: txtNombre.value,
            cantidad: txtCantidad.value
        })
        .then(function (response) {
            console.log(response);
            read();
            limpiar();
        })
        .catch(function (error) {
            console.log(error.response.data.errors);
            let errors = "";
            Object.values(error.response.data.errors).forEach((element) => {
                errors += `<li>${element}</li>`;
            });
            errores.innerHTML = errors;
        });
}

function limpiar() {

    document.getElementById("txtNombre").value = "";
    document.getElementById("txtCantidad").value = "";

}

function read(url = "/producto") {

    axios
        .get(url)
        .then(function (response) {
            console.log(response.data);
            let data = "";
            let paginacion = "";
            data = '' 
            response.data.data.forEach((element, index) => {
                data += `<tr>`;
                data += `<td class="text-center">${index + 1}</td>`;
                data += `<td class="text-center">${element.nombre}</td>`;
                data += `<td class="text-center">${element.cantidad}</td>`;
                data += `<td class="text-center">${element.estado}</td>`;
                data += `<td class="text-center"><input onclick='load(${JSON.stringify(element)})' type="radio" name="checkOpcion" id="checkOpcion"></td>`;
                data += `</tr>`;
            });

            response.data.links.forEach(element =>{
                paginacion += `<td><a class='links' onclick="read('${element.url}')">${element.label}</a></td>`
            });

            pages.innerHTML = paginacion

            table.innerHTML = data
        })
        .catch(function (error) {
            console.log(error)
        });

}

function update() {

    axios.put("/producto/" + this.id, {
        id: this.id,
        nombre: txtNombre.value,
        cantidad: txtCantidad.value,
    })
    .then(function (response) {
        console.log(response)
        read();
        limpiar();
    })

}

function deletes() {
    Swal.fire({
        title: '¿Eliminar Producto?',
        text: "¿Está Seguro De Eliminar Este Producto...?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete("/producto/" + this.id, )
            .then(function (response) {
                console.log(response);
                read();
                limpiar()
            })
            .catch(function (error) {
                console.log(error);
            })
        }
      })
}

function load(element) {

    this.id = element.id;
    txtNombre.value = element.nombre;
    txtCantidad.value = element.cantidad;
    console.log("Load");

}

read();