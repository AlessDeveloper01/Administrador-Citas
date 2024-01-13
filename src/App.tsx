import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPácientes";

type Paciente = {
    id?: string;
    nombre: string;
    propietario: string;
    email: string;
    fecha: string;
    sintomas: string;
};

function App() {
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    const [paciente, setPaciente] = useState<Paciente>({} as Paciente);

    useEffect(() => {
        const pacientesLocalStorage =
            JSON.parse(localStorage.getItem("pacientes")!) ?? [];

        setPacientes(pacientesLocalStorage);
    }, []);

    useEffect(() => {
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }, [pacientes]);

    const eliminarPaciente = (id: string) => {
        const pacientesActualizados = pacientes.filter(
            (paciente) => paciente.id !== id
        );
        setPacientes(pacientesActualizados);
    };

    return (
        <div className="container mx-auto mt-20">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario
                    setPacientes={setPacientes}
                    pacientes={pacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    );
}

export default App;
