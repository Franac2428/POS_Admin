import './globals.css'; // Asegúrate de importar los estilos globales

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://path/to/your/custom/styles.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Tu aplicación</title>
            </head>
            <body className="bg-gray-100 text-gray-900">
                {children}
            </body>
        </html>
    );
}
