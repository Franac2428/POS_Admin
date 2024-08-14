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
    NULL, 
    'image/jpeg'
);
INSERT INTO CategoriasProducto (NombreCategoria, Descripcion)
VALUES
  ('Carnes', 'Productos de carne y embutidos'),
  ('Vegetales', 'Vegetales y hortalizas frescas'),
  ('Bebidas', 'Bebidas alcohólicas y no alcohólicas'),
  ('Utensilios de Cocina', 'Herramientas y utensilios para cocina');
INSERT INTO Proveedores (Nombre, Tipo, Direccion, Telefono, Email, Contacto)
VALUES
  ('Proveedor de Carne', 'Alimentos', '123 Calle Principal', '123-456-7890', 'proveedorcarne@example.com', 'Juan Pérez'),
  ('Proveedor de Vegetales', 'Alimentos', '456 Avenida Secundaria', '987-654-3210', 'proveedorvegetales@example.com', 'Ana Gómez'),
  ('Proveedor de Bebidas', 'Alimentos', '789 Calle Terciaria', '555-555-5555', 'proveedorbebidas@example.com', 'Carlos Sánchez'),
  ('Proveedor de Utensilios', 'Hogar', '321 Boulevard Cuarto', '111-111-1111', 'proveedorutensilios@example.com', 'María López');


INSERT INTO tipomovimiento(nombre)
VALUES('Entrada')

INSERT INTO tipomovimiento(nombre)
VALUES('Salida')

INSERT INTO estadomovimiento(nombre)
VALUES('Pendiente')

INSERT INTO estadomovimiento(nombre)
VALUES('Pagado')

INSERT INTO estadomovimiento(nombre)
VALUES('Anulado')

