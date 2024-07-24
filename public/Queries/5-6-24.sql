use pos;
INSERT INTO categoriaprodventa VALUES (1,'Pollo Frito',1),(2,'Comida Rápida',1),(3,'Bebidas',1),(4,'Postres',1),(5,'Otros',1);
INSERT INTO ROLES(Descripcion)
VALUES('Administrador'), ('Empleado');
 
INSERT INTO statusauditorialogin(Status)
VALUES('Pendiente');
 
INSERT INTO statusauditorialogin(Status)
VALUES('Fallido');
 
INSERT INTO statusauditorialogin(Status)
VALUES('Satisfactorio');
INSERT INTO statusauditorialogin(Status)
VALUES('No Existe');

INSERT INTO categoriaprodventa VALUES (1,'Pollo Frito',1),(2,'Comida Rápida',1),(3,'Bebidas',1),(4,'Postres',1),(5,'Otros',1);
INSERT INTO categoriaprodventa VALUES (1,'Pollo Frito',1),(2,'Comida Rápida',1),(3,'Bebidas',1),(4,'Postres',1),(5,'Otros',1);

INSERT INTO `pos`.`mediopago` (`nombre`) VALUES ('Efectivo');
INSERT INTO `pos`.`mediopago` (`nombre`) VALUES ('Tarjeta');
INSERT INTO `pos`.`mediopago` (`nombre`) VALUES ('Transferencia / Sinpe');
INSERT INTO pos.infoempresa (
    idEmpresa, 
    nombre, 
    nombreComercial, 
    identificacion, 
    correo, 
    telefono, 
    celular, 
    direccion, 
    logo, 
    tipoImagen
) VALUES (
    1, 
    'Empresa Ejemplo', 
    'Comercial Ejemplo', 
    '123456789', 
    'correo@ejemplo.com', 
    '12345678', 
    '87654321', 
    '123 Calle Ejemplo', 
    LOAD_FILE('/path/to/logo.jpg'), 
    'image/jpeg'
);
