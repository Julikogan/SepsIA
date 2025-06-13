import { obtenerResultadoPorSignoVital } from '../services/resultadosService.js';

export const getResultadoPorSignoVital = async (req, res) => {
  const idSigno = Number(req.params.id)

  try {
    const resultado = await obtenerResultadoPorSignoVital(idSigno);
    console.log("Resultado encontrado:", resultado);

    if (!resultado) {
      return res.status(404).json({ message: 'Resultado no encontrado para este signo vital' });
    }

    res.json(resultado);
  } catch (error) {
    console.error('Error al obtener resultado:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};