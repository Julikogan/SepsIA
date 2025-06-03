import axios from 'axios'
import { crearSignoVital, guardarResultadoIA } from '../services/signosService.js'

export const registrarSignosVitales = async (req, res) => {
  try {
    const { presion, horario, id_paciente } = req.body

    const nuevoSigno = await crearSignoVital({
      presion,
      horario: new Date(horario),
      id_paciente
    })
// Llamada a la IA (reemplazar URL con la real)
/* const respuestaIA = await axios.post('http://localhost:5000/analizar', {
      presion,
      horario,
      id_paciente
    })*/
//simulacion temporal:
const respuestaIA = { data: { porcentaje: Math.random() * 100 } }

    const resultado = await guardarResultadoIA({
      id_signo_vital: nuevoSigno.id,
      id_paciente,
      resultado: respuestaIA.data.porcentaje
    })

    res.status(201).json({ signo: nuevoSigno, resultado })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al registrar signos vitales' })
  }
}