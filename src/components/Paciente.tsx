import React from "react";
import Swal from "sweetalert2";

type Paciente = {
    id?: string;
    nombre: string;
    propietario: string;
    email: string;
    fecha: string;
    sintomas: string;
};

interface PacienteProps {
    paciente: Paciente;
    setPaciente: React.Dispatch<React.SetStateAction<Paciente>>;
    eliminarPaciente?: (id: string) => void;
}

const Paciente = ({ paciente, setPaciente, eliminarPaciente }: PacienteProps) => {

    const { nombre, propietario, email, fecha, sintomas } = paciente;

    const handleEliminar = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Borrar!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Eliminado!",
                    text: "El paciente ha sido eliminado.",
                    icon: "success",
                });

                eliminarPaciente && eliminarPaciente(paciente.id!)
            }
        });
    };
    return (
        <div className="mx-5 my-2 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:{" "}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between lg:gap-0 gap-4">
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-md text-white font-bold uppercase w-full md:w-1/2 lg:w-1/3 mt-10"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md text-white font-bold uppercase w-full md:w-1/2 lg:w-1/3 mt-10"
                    onClick={() => handleEliminar()}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Paciente;
