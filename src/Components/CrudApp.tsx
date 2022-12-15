import React, {useState} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'



const initialDB =[
    {
      id: 1,
      nombre: "Tablet",
      contenido: "Android",
      peso: 2,
      color: "Blanco",
      cantidad: 4,
      descripcion: "Tablet xiami sistema operativo andoid"
    },
    {
      id: 3,
      nombre: "Balon-decuero de futball",
      contenido: "Cuero",
      peso: 2,
      color: "Azul",
      cantidad: 6,
      descripcion: "Balon de cuero de la mas alta calidad"
    },
    {
      id: 4,
      nombre: "Muse",
      contenido: "Articulo tecnologico",
      peso: 1,
      color: "Negro",
      cantidad: 3,
      descripcion: "Mouse inalambrico de bateria "
    },
    {
      id: 5,
      nombre: "Computadora",
      contenido: "Window 10",
      peso: 3,
      color: "Gris",
      cantidad: 4,
      descripcion: "Computadora window 10"
    },
    {
      id: 6,
      nombre: "Mesa De lujo",
      contenido: "croptonita-importada",
      peso: 478,
      color: "mate",
      cantidad: 1,
      descripcion: "Mesa, Pieza .Art"
    },
    {
      id: 7,
      nombre: "Carro ferrary",
      contenido: "Carro de lujo",
      peso: 1000,
      color: "Red",
      cantidad: 1,
      descripcion: "Carro de alto rendimiento"
    }
]

console.log(initialDB)
  


const CrudApp = () => {
    const [db, setDb] = useState(initialDB);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData =(data:any) => {
      data.id =Date.now();
      //console.log(data)
      setDb([...db, data])
    };

    const updateData =(data:any) => {
      let newData = db.map(el => el.id === data.id ? data:el)
      setDb(newData);
    };

    const deleteData =(id:any) => {
      let isDelete =window.confirm(`¿Estás seguro de eliminar el registro con id # `+ id +` ?`);

      if(isDelete) {
        let newData = db.filter((el) => el.id !== id)
        setDb(newData)
      }else {
        return;
      }

    };



  return (
    <div>
        <div className='flex justify-center mb-4'>
        <h2 className='text-center w-3/6 text-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5  mr-2  mt-4 '>{dataToEdit?"EDITAR PRODUCTO":"AGREGAR PRODUCTO"}</h2>
        </div>

        <CrudForm
        createData={createData}
         updateData={updateData} 
         dataToEdit={dataToEdit}
         setDataToEdit={setDataToEdit}/>
        <CrudTable  data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}/>
    </div>
  )
}

export default CrudApp