const form = document.querySelector('.form')
let salarioATT = 0
let resp = document.querySelector('.resp')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const inputSal = document.querySelector('#salario')
    const salNum = Number(inputSal.value)  
    const p1 = 0.2
    const p2 = 0.15
    const p3 = 0.1
    const p4 = 0.05

    resp.innerHTML = 'Salario antes do reajuste R$ ' + salNum + '<br>'

    if(salNum <= 280){
        salarioATT = salNum  + (salNum * p1)  
        resp.innerHTML += 'Percentual de aumento aplicado ' + (p1*100) + '% <br>'
        resp.innerHTML += 'Valor do aumento: ' + (salNum * p1) + '<br>'
        resp.innerHTML += 'Salario com reajuste R$ ' + salarioATT + '<br>'
    } else if (salNum > 280 && salNum <= 700) {
        salarioATT = salNum  + (salNum * p2)  
        resp.innerHTML += 'Percentual de aumento aplicado ' + (p2*100) + '% <br>'
        resp.innerHTML += 'Valor do aumento: ' + (salNum * p2) + '<br>'
        resp.innerHTML += 'Salario com reajuste R$ ' + salarioATT + '<br>'
    } else if (salNum > 700 && salNum <= 1500){
        salarioATT = salNum  + (salNum * p3)  
        resp.innerHTML += 'Percentual de aumento aplicado ' + (p3*100) + '%  <br>'
        resp.innerHTML += 'Valor do aumento: ' + (salNum * p3) + '<br>'
        resp.innerHTML += 'Salario com reajuste R$ ' + salarioATT + '<br>'
    } else if (salNum > 1500) {
        salarioATT = salNum  + (salNum * p4)  
        resp.innerHTML += 'Percentual de aumento aplicado ' + (p4*100) + '%'
        resp.innerHTML += 'Valor do aumento: ' + (salNum * p4) + '<br>'
        resp.innerHTML += 'Salario com reajuste R$ ' + salarioATT + '<br>'
    }
})