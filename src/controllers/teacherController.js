// module.exports = class teacherController {
//     //Cadastro de professor
//   static async postTeacher(req, res) {
//     const { nome, cargaHoraria } = req.body;
//     if (!nome || !cargaHoraria) {
//       res.status(400).jason({ message: "Dados inválidos" });
//     } else {
//       res.status(200).json({ message: "Informação recebida: Docente cadastrado", nome, cargaHoraria, });
//     }
//   }
//   //Listar professor
//   static async getTeacher(req, res) {
//     res.status(200).json({nome: "Lívia"})
//   }
// };
