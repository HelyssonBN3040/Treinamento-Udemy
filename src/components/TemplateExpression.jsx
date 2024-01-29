import React from 'react'

const TemplateExpression = () => {
    const name = 'Helysson';
    const data = {
        age:22,
        job:"Programador"
    }
  return (
    <div>
        <p>O resultado desse tamplete teste eh {3 * 4}</p>

        {/*Resultado da variavel*/}
        <h2>Seja Bem-Vindo {name}</h2>
        <p>A sua idade é {data.age} anos, e vc é {data.job}</p>
        
    </div>
  )
}

export default TemplateExpression