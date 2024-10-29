const meta = document.getElementById('Meta-graphic');
const produto = document.getElementById('Produto-graphic');
const vendedor = document.getElementById('Vendedor-graphic');
const analise = document.getElementById('Analise-graphic');

Chart.defaults.color = '#f5f5f5';

new Chart(meta, {
    type: 'bar', 
    data: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Meta (Linha)',
          data: [10, 15, 15, 7, 3, 4],
          type: 'line', 
          backgroundColor: 'rgba(255, 255, 255, 0.4)', 
          borderColor: '#ffff', 
          borderWidth: 2,
          fill: false 
        },
        {
            label: 'Receita (Barra)',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(0, 123, 238, 0.4)', 
            borderColor: 'rgba(0, 123, 238, 1)',
            borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});
new Chart(produto, {
    type: 'line',
    data: {
      labels: ['Exel', 'Power Point', 'Power BI', 'Python', 'Word'],
      datasets: [{
        label: 'Receita por produto',
        data: [12, 19, 3, 5, 2],
        borderWidth: 1.5,
        borderColor: '#02ff0f88',
        // Customizando a cor dos segmentos
        segment: {
          borderColor: (ctx) => {
            const value = ctx.p1.parsed.y; // Valor atual
            const prevValue = ctx.p0.parsed.y; // Valor anterior
            
            // Se o valor atual for maior que o anterior, é uma subida (verde)
            if (value > prevValue) {
              return '#02ff0f'; // Verde
            } else {
              // Se o valor atual for menor ou igual ao anterior, é uma queda (vermelho)
              return '#ff0000'; // Vermelho
            }
          },
        },
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          offset: true // Aumenta o espaço antes do primeiro rótulo
        },
        y: {
          beginAtZero: true
        }
      }
    }
  });
new Chart(vendedor, {
  type: 'bar',
  data: {
    labels: ['João', 'Mateus', 'Arthur', 'Eduardo', 'Luiz', 'Lucas'],
    datasets: [{
      label: 'Vendedores',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(133, 122, 255, 0.4)', 
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Modais

document.getElementById('Btn-add0').addEventListener('click', function() {
    document.getElementById('ModalAdicionar').style.display = 'block';
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('ModalAdicionar').style.display = 'none';
});
window.addEventListener('click', function(event) {
    const modal = document.getElementById('ModalAdicionar');
    if (event.target === modal) {
        modal.style.display = 'none'; // Fecha o modal
    }
});


document.getElementById('generateFields').addEventListener('click', generateFields);
document.getElementById('numFields').addEventListener('keypress', function(event) {
    // Verifica se a tecla pressionada é Enter
    if (event.key === 'Enter') {
        generateFields(); // Chama a função para gerar campos
    }
});

function generateFields() {
    const numFields = parseInt(document.getElementById('numFields').value);
    const container = document.getElementById('dynamicFieldsContainer');
    container.innerHTML = ''; // Limpa campos anteriores

    // Limita o número de campos a 25
    if (numFields > 10) {
        alert('O número máximo de campos é 10.');
        return;
    }

    for (let i = 0; i < numFields; i++) {
        const fieldWrapper = document.createElement('div');

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = 'Campo ' + (i + 1);
        inputField.className = 'input-field';

        const metaField = document.createElement('input');
        metaField.type = 'number';
        metaField.placeholder = 'Meta para Campo ' + (i + 1);
        metaField.className = 'meta-field';

        const valueField = document.createElement('input');
        valueField.type = 'number';
        valueField.placeholder = 'Valor para Campo ' + (i + 1);
        valueField.className = 'value-field';

        fieldWrapper.appendChild(inputField);
        fieldWrapper.appendChild(metaField);
        fieldWrapper.appendChild(valueField);
        container.appendChild(fieldWrapper);
    }
}