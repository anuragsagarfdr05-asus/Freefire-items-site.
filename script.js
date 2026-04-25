fetch('items.json')
  .then(response => response.json())
  .then(data => {
    let container = document.getElementById('items-container');
    data.forEach(item => {
      let div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <img src="${item.icon}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>ID: ${item.id}</p>
        <p>Code: ${item.code}</p>
      `;
      container.appendChild(div);
    });
  });
