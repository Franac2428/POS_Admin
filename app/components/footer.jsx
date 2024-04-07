import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <p>&copy; 2024 Pollo petote. Todos los derechos reservados.</p>
                    </div>
                    <div>
                        <a href="#" className="text-gray-300 hover:text-white mx-3">Términos y Condiciones</a>
                        <a href="#" className="text-gray-300 hover:text-white mx-3">Política de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer

