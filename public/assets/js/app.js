const render = (root,objeto) => {
  console.log(objeto);
  const name = $('<h1>'+objeto.name.title+" "+objeto.name.first+" "+objeto.name.last+'</h1>');
  const gender = $('<p>'+objeto.gender+'</p>');
  const celular = $('<p>'+objeto.cell+'</p>');
  const correo = $('<p>'+objeto.email+'</p>');
  const ciudad = $('<p>'+objeto.location.city+'</p>');
  const street = $('<p>'+objeto.location.street+'</p>');

  root.append(name);
  root.append(gender);
  root.append(celular);
  root.append(correo);
  root.append(ciudad);
  root.append(street);

};

const state = {
  data: null,
  objeto: null,
};
$(_ => {
    $.getJSON('https://randomuser.me/api/',(response,error) => {
      console.log(response);
      state.data = response.results[0];
      render($('.root'),state.data);
    });
});
