function create() {

    axios
        .post("/producto", {
            nombre: txtNombre.value,
            cantidad: txtCantidad.value
        })
        .then(function (response) {
            console.log(response);
            read();
        })
        .catch(function (error) {
            console.log(error);
        });

}

function read() {

    axios
        .get("/producto")
        .then(function (response) {
            console.log(response.data);
            data = '' 
            response.data.forEach((element, index) => {
                data += `<tr>`;
                data += `<td class="text-center">${index + 1}</td>`;
                data += `<td class="text-center">${element.nombre}</td>`;
                data += `<td class="text-center">${element.cantidad}</td>`;
                data += `<td class="text-center">${element.estado}</td>`;
                data += `<td class="text-center"><input onclick='load(${JSON.stringify(element)})' type="radio" name="checkOpcion" id="checkOpcion"></td>`;
                data += `</tr>`;
            });
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
    })

}

function deletes() {

    let respuesta = confirm("¿Seguro de Eliminar Este Producto?");
    if (respuesta) {
        
        axios.delete("/producto/" + this.id, )
        .then(function (response) {
            console.log(response);
            read();
        })
        .catch(function (error) {
            console.log(error);
        })

    }

}

function load(element) {

    this.id = element.id;
    txtNombre.value = element.nombre;
    txtCantidad.value = element.cantidad;
    console.log("Load");

}

read();