import { defineStore } from "pinia";

const fechaEntrega = new Date();

const comentariosData = [
  {
    elemento: "entrega",
    numVersion: 1,
    nombre: "Ejercicio1.pdf",
    tipo: "Documento / PDF (1.7 MB)",
    fecha: fechaEntrega.toLocaleDateString("es-ES"),
    url: "test",
  },
  {
    elemento: "mensaje",
    id: 1,
    texto: "Msg A",
  },
];

export const useComentariosStore = defineStore("comentarios", {
  state: () => ({
    comentarios: comentariosData,
    idMensaje: 1,
  }),
  actions: {
    nuevoMensaje(mensaje) {
      this.comentarios.push({
        elemento: "mensaje",
        id: this.idMensaje + 1,
        texto: mensaje,
      });

      this.idMensaje++;
    },
  },
});
