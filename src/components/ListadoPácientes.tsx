
import Paciente from "./Paciente";

type PacienteData = {
    id?: string;
    nombre: string;
    propietario: string;
    email: string;
    fecha: string;
    sintomas: string;
};

interface ListadoPacientesProps {
    pacientes: PacienteData[];
    setPaciente: React.Dispatch<React.SetStateAction<Paciente>>;
    eliminarPaciente?: (id: string) => void;
}

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }: ListadoPacientesProps) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll mt-10 md:mt-0">
            {pacientes.length === 0 ? (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Listado Vacio
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando a{" "}
                        <span className="font-bold text-indigo-600">
                            tus pacientes
                        </span>
                    </p>
                    <p className="text-center text-xl font-bold border p-3 uppercase bg-white shadow-md">
                        No hay pacientes
                    </p>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Listado De Pacientes
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra{" "}
                        <span className="font-bold text-indigo-600">
                            tus pacientes y citas
                        </span>
                    </p>
                    {pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default ListadoPacientes;
