import { useState } from "react";
import styles from './Formulário.module.css'

const Formulário = () => {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [resultadoIMC, setResultadoIMC] = useState(0)

    function calculaIMC() {
        let imc = peso / (altura * altura)

        setResultadoIMC(imc)
    }

    return (
        <>
            <form className={styles.form}>
                <input className={styles.campo} type="number" placeholder="Altura (em metros)" onChange={evento => setAltura(parseFloat(evento.target.value))} />
                <input className={styles.campo} type="number" placeholder="Peso (em quilos)" onChange={evento => setPeso(parseFloat(evento.target.value))} />
            </form>
            <div className={styles.btnDiv}>
                <button className={styles.btn} onClick={calculaIMC} type="button">Calcular</button>
            </div>

            {resultadoIMC !== 0 && (
                <div className={styles.resultado}>
                <h2>Seu IMC é de {resultadoIMC.toFixed(2)}, confira a classificação na tabela abaixo:</h2>
                    <table className={styles.tabela}>
                        <tr className={styles.cabecalho}>
                            <th>RESULTADO</th>
                            <th>SITUAÇÃO</th>
                        </tr>
                        <tr>
                            <td>Abaixo de 17</td>
                            <td>Muito abaixo do peso</td>
                        </tr>
                        <tr>
                            <td>Entre 17 e 18,49</td>
                            <td>Abaixo do peso</td>
                        </tr>
                        <tr>
                            <td>Entre 18,5 e 24,99</td>
                            <td>Peso normal</td>
                        </tr>
                        <tr>
                            <td>Entre 25 e 29,99</td>
                            <td>Acima do peso</td>
                        </tr>
                        <tr>
                            <td>Entre 30 e 34,99</td>
                            <td>Obesidade I</td>
                        </tr>
                        <tr>
                            <td>Entre 35 e 39,99</td>
                            <td>Obesidade II (severa)</td>
                        </tr>
                        <tr>
                            <td>Acima de 40</td>
                            <td>Obesidade III (mórbida)</td>
                        </tr>
                    </table>
                </div>
            )}
        </>
    )
}

export default Formulário