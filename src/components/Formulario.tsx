import React, { useState, useEffect } from "react";
import { AlertaMensaje } from "./ui/AlertaMensaje";

import { v4 as uuidv4 } from "uuid";

type Paciente = {
    id?: string;
    nombre: string;
    propietario: string;
    email: string;
    fecha: string;
    sintomas: string;
};

interface FormularioProps {
    setPacientes: React.Dispatch<React.SetStateAction<Paciente[]>>;
    pacientes: Paciente[];
    paciente: Paciente;
    setPaciente: React.Dispatch<React.SetStateAction<Paciente>>;
}

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }: FormularioProps) => {
    const [nombre, setNombre] = useState<string>("");
    const [propietario, setPropietario] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [fecha, setFecha] = useState<string>("");
    const [sintomas, setSintomas] = useState<string>("");

    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if (paciente.id) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if ([nombre, propietario, email, fecha, sintomas].includes("")) {
            setError(true);
            return;
        }

        const pacienteObj: Paciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        };

        if (paciente.id) {
            pacienteObj.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState => {
                if(pacienteState.id === paciente.id) {
                    return pacienteObj;
                }
                return pacienteState;
            });
            setPacientes(pacientesActualizados);
        } else {
            pacienteObj.id = uuidv4();
            setPacientes([...pacientes, pacienteObj]);
        }
 
        setPaciente({} as Paciente);
        setError(false);
        setNombre("");
        setPropietario("");
        setEmail("");
        setFecha("");
        setSintomas("");
    }
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>

            <p className="mt-5 text-lg text-center mb-10">
                Añade Pacientes y {""}{" "}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="px-5 py-10 bg-white rounded-md shadow-md">
                {
                    error && (
                        <AlertaMensaje
                            mensaje="Todos los campos son obligatorios"
                            tipo="error"
                        />
                    )
                }

                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block text-gray-800 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        type="text"
                        name="mascota"
                        id="mascota"
                        className="w-full border-2 p-2 mt-2 placeholder-gray-600 rounded-md text-gray-700"
                        placeholder="Nombre Mascota"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="block text-gray-800 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        type="text"
                        name="propietario"
                        id="propietario"
                        className="w-full border-2 p-2 mt-2 placeholder-gray-600 rounded-md text-gray-700"
                        placeholder="Nombre Propietario"
                        onChange={(e) => setPropietario(e.target.value)}
                        value={propietario}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-800 uppercase font-bold">
                        Email De Contacto
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full border-2 p-2 mt-2 placeholder-gray-600 rounded-md text-gray-700"
                        placeholder="Email de contacto"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block text-gray-800 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        type="date"
                        name="alta"
                        id="alta"
                        className="w-full border-2 p-2 mt-2 placeholder-gray-600 rounded-md text-gray-700"
                        onChange={(e) => setFecha(e.target.value)}
                        value={fecha}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block text-gray-800 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="w-full border-2 p-2 mt-2 placeholder-gray-600 rounded-md text-gray-700"
                        placeholder="Descripcion de los sintomas"
                        onChange={(e) => setSintomas(e.target.value)}
                        value={sintomas}
                    ></textarea>
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-all duration-300"
                    value={paciente.id ? "Editar Paciente" : "Agregar Cita"}
                />
            </form>
        </div>
    );
};

export default Formulario;
