import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://avatars.githubusercontent.com/u/95266145?v=4",
      nombre: "José Andrés",
      puesto: "Estudiante de Programación",
      fav: true

    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://avatars.githubusercontent.com/u/95266145?v=4",
      nombre: "José Andrés",
      puesto: "Estudiante de Front End",
      fav: false

    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://s2.abcstatics.com/media/summum/2021/10/01/maxi_iglesias-kXKH--620x349@abc.jpeg",
      nombre: "Omar Briceño",
      puesto: "Estudiante de Data Science",
      fav: false

    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://i.pinimg.com/236x/64/ea/a2/64eaa262e3c5e981a78ed06c871ba0c8--business-outfit-business-portrait.jpg",
      nombre: "Sofía Jímenez",
      puesto: "Estudiante de UX y Diseño",
      fav: false

    },
    {
      id: uuid(),
      equipo: "Móvil",
      foto: "https://pbs.twimg.com/profile_images/993854899212386309/po2Yz_Sm_400x400.jpg",
      nombre: "Thiago Briceño",
      puesto: "Estudiante de Móvil",
      fav: false

    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://cdn2.salud180.com/sites/default/files/styles/1x1_large/public/field/image/2020/03/estas_son_las_caracteristicas_que_vuelven_a_una_mujer_irresistible_segun_ellos.jpg",
      nombre: "Ema Mendez",
      puesto: "Estudiante de Innovación y Gestión",
      fav: false

    },
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7F9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])


  // Ternario --> Condición ? ->True-> seMuestra : false->noSeMuestra
  // Condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    // Spread operator -> copia los valores, los 3 puntos significan la cantidad de recorridos en el arreglo
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  // Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    const colaboresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboresActualizados);
  }

  return (
    <div >
      <Header />
      {/* { mostrarFormulario ? <Formulario /> : <></> } */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }
      <Footer />
    </div>

  );
}
export default App;
