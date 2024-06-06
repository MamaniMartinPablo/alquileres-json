fetch("../alquileres.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let cad = `
    <table border="1">
            <tr>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th>Condicion</th>
                <th>Info</th>
            </tr>
    `;
    for (let cabania of data) {
      cad =
        cad +
        `
        <tr class="container">
            <td class="title">${cabania.title}</td>
            <td class="image">
                <img src="${cabania.thumbnail}" alt="${cabania.title}">
            </td>
            <td class="price"> $${cabania.price}</td>
            <td class="condition">${cabania.condition}</td>
            <td class="informacion"><a href="${cabania.permalink}">Ver</a></td>
        </tr>
    `;
    }
    cad=cad+`</table>`
    document.querySelector("#productos").innerHTML = cad;
  });

