interface AlertaProps {
    mensaje: string;
    tipo: string;
}

export const AlertaMensaje = ({ mensaje, tipo }: AlertaProps) => {
    return (
        <div>
            {tipo === "error" ? (
                <p className="text-center text-white font-bold bg-red-500 py-2 px-4 rounded-md uppercase mb-4">
                    {mensaje}
                </p>
            ) : (
                <p className="text-center text-white font-bold bg-green-500 py-2 px-4 rounded-md uppercase mb-4">
                    {mensaje}
                </p>
            )}
        </div>
    );
};
