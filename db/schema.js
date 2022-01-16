const { gql } = require("apollo-server");

// types definitions
const typeDefs = gql`
  type Curso {
    titulo: String
    tecnologia: String
  }

  type Tecnologia {
    tecnologia: String
  }

  type Token {
    token: String
  }

  type Proyecto {
    nombre: String
    id: ID
  }

  type Tarea {
    nombre: String
    id: ID
    proyecto: String
    estado: Boolean
  }

  type Query {
    obtenerCursos: [Curso]

    obtenerTecnologia: [Tecnologia]

    # Proyectos
    obtenerProyectos: [Proyecto]

    # Tareas
    obtenerTareas(input: ProyectoIDInput): [Tarea]
  }

  input ProyectoIDInput {
    proyecto: String!
  }


  input UsuarioInput {
    nombre: String!
    email: String!
    password: String!
  }
  input AutenticarInput {
    email: String!
    password: String!
  }

  input ProyectoInput {
    nombre: String!
  }

  input TareaInput {
    nombre: String!
    proyecto: String!
  }

  type Mutation {
    # Usuarios
    crearUsuario(input: UsuarioInput): String
    autenticarUsuario(input: AutenticarInput): Token

    # Proyectos
    nuevoProyecto(input: ProyectoInput): Proyecto
    actualizarProyecto(id: ID!, input: ProyectoInput): Proyecto
    eliminarProyecto(id: ID!): String

    # Tareas
    nuevaTarea(input: TareaInput): Tarea
    actualizarTarea(id: ID!, input: TareaInput, estado: Boolean): Tarea
    eliminarTarea(id: ID) : String
  }
`;

/* 
* input UsuarioInput {...} => se crea un input donde inyecto los datos
* nombre: String! => Obliga a que el campo sea obligatorio
* Query {...} => Es para hacer las consultas

*/

module.exports = typeDefs;
