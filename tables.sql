-- MODULO DE INICIO SESION
CREATE TABLE Usuarios (
  UsuarioID int NOT NULL AUTO_INCREMENT,
  Username varchar(255) NOT NULL,
  PasswordHash varchar(255) NOT NULL,
  Email varchar(255) NOT NULL,
  IsActive bool NOT NULL DEFAULT true,
  LastLogin datetime,
  Nombre varchar,
  Apellido varchar,
  Telefono varchar,
  Direccion text,
  RolID int,
  FechaContratacion date,
  TipoUsuario varchar,
  PRIMARY KEY (UsuarioID),
  UNIQUE (Username),
  UNIQUE (Email),
  FOREIGN KEY (RolID) REFERENCES Roles(RoleID)
);

CREATE TABLE Roles (
  RoleID int NOT NULL AUTO_INCREMENT,
  RoleName varchar(255) NOT NULL,
  Description text,
  PRIMARY KEY (RoleID),
  UNIQUE (RoleName)
);

CREATE TABLE UsuarioRoles (
  UsuarioID int NOT NULL,
  RoleID int NOT NULL,
  PRIMARY KEY (UsuarioID, RoleID),
  FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID),
  FOREIGN KEY (RoleID) REFERENCES Roles(RoleID)
);

CREATE TABLE Permisos (
  PermissionID int NOT NULL AUTO_INCREMENT,
  PermissionName varchar(255) NOT NULL,
  Description text,
  PRIMARY KEY (PermissionID),
  UNIQUE (PermissionName)
);

CREATE TABLE RolPermisos (
  RoleID int NOT NULL,
  PermissionID int NOT NULL,
  PRIMARY KEY (RoleID, PermissionID),
  FOREIGN KEY (RoleID) REFERENCES Roles(RoleID),
  FOREIGN KEY (PermissionID) REFERENCES Permisos(PermissionID)
);

-- MODULO DE PUNTO DE VENTA (POS)
CREATE TABLE Clientes (
  ClienteID int NOT NULL AUTO_INCREMENT,
  Nombre varchar,
  Apellido varchar,
  Email varchar NOT NULL,
  Telefono varchar,
  Direccion text,
  RFC varchar NOT NULL,
  PRIMARY KEY (ClienteID),
  UNIQUE (Email),
  UNIQUE (RFC)
);

CREATE TABLE Productos (
  ProductoID int NOT NULL AUTO_INCREMENT,
  Nombre varchar NOT NULL,
  Descripcion text,
  PrecioCompra decimal(10,2) NOT NULL,
  PrecioVenta decimal(10,2) NOT NULL,
  Stock int NOT NULL,
  CategoriaID int NOT NULL,
  ProveedorID int NOT NULL,
  FechaIngreso datetime NOT NULL,
  FechaCaducidad datetime,
  Estado varchar NOT NULL,
  PRIMARY KEY (ProductoID),
  FOREIGN KEY (CategoriaID) REFERENCES CategoriasProducto(CategoriaProductoID),
  FOREIGN KEY (ProveedorID) REFERENCES Proveedores(ProveedorID)
);

CREATE TABLE Facturas (
  FacturaID int NOT NULL AUTO_INCREMENT,
  ClienteID int NOT NULL,
  Fecha datetime NOT NULL,
  Total decimal(10,2) NOT NULL,
  Observaciones text,
  Estado varchar NOT NULL,
  PRIMARY KEY (FacturaID),
  FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);

CREATE TABLE DetallesFactura (
  DetalleID int NOT NULL AUTO_INCREMENT,
  FacturaID int NOT NULL,
  ProductoID int NOT NULL,
  Cantidad int NOT NULL,
  Precio decimal(10,2) NOT NULL,
  Impuesto decimal(5,2) NOT NULL,
  PRIMARY KEY (DetalleID),
  FOREIGN KEY (FacturaID) REFERENCES Facturas(FacturaID),
  FOREIGN KEY (ProductoID) REFERENCES Productos(ProductoID)
);

CREATE TABLE Caja (
  CajaID int NOT NULL AUTO_INCREMENT,
  FechaApertura datetime NOT NULL,
  MontoInicial decimal(10,2) NOT NULL,
  TotalEfectivo decimal(10,2) NOT NULL,
  TotalTarjeta decimal(10,2) NOT NULL,
  TotalOtros decimal(10,2) NOT NULL,
  FechaCierre datetime,
  Estado varchar NOT NULL,
  PRIMARY KEY (CajaID)
);

-- MODULO INVENTARIO
CREATE TABLE Proveedores (
  ProveedorID int NOT NULL AUTO_INCREMENT,
  Nombre varchar NOT NULL,
  Direccion text,
  Telefono varchar,
  Email varchar NOT NULL,
  Contacto varchar,
  PRIMARY KEY (ProveedorID),
  UNIQUE (Email)
);

CREATE TABLE Pedidos (
  PedidoID int NOT NULL AUTO_INCREMENT,
  ProveedorID int NOT NULL,
  FechaEmision datetime NOT NULL,
  FechaRecepcion datetime,
  Estado varchar NOT NULL,
  Observaciones text,
  PRIMARY KEY (PedidoID),
  FOREIGN KEY (ProveedorID) REFERENCES Proveedores(ProveedorID)
);

CREATE TABLE DetallesPedido (
  DetallePedidoID int NOT NULL AUTO_INCREMENT,
  PedidoID int NOT NULL,
  ProductoID int NOT NULL,
  Cantidad int NOT NULL,
  PrecioUnitario decimal(10,2) NOT NULL,
  IVA decimal(5,2) NOT NULL,
  Total decimal(10,2) NOT NULL,
  PRIMARY KEY (DetallePedidoID),
  FOREIGN KEY (PedidoID) REFERENCES Pedidos(PedidoID),
  FOREIGN KEY (ProductoID) REFERENCES Productos(ProductoID)
);

-- MODULO Adm.Financiero
CREATE TABLE Transacciones (
  TransaccionID int NOT NULL AUTO_INCREMENT,
  UsuarioID int NOT NULL,
  Fecha datetime NOT NULL,
  Tipo varchar NOT NULL,
  Monto decimal(10,2) NOT NULL,
  Descripcion text,
  Categoria varchar NOT NULL,
  Estado varchar NOT NULL,
  PRIMARY KEY (TransaccionID),
  FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);

CREATE TABLE InformesFinancieros (
  InformeID int NOT NULL AUTO_INCREMENT,
  TransaccionID int NOT NULL,
  PeriodoID int NOT NULL,
  FechaCreacion datetime NOT NULL,
  Titulo varchar NOT NULL,
  Descripcion text,
  UbicacionArchivo varchar,
  TipoFormato varchar NOT NULL,
  PRIMARY KEY (InformeID),
  FOREIGN KEY (TransaccionID) REFERENCES Transacciones(TransaccionID),
  FOREIGN KEY (PeriodoID) REFERENCES Periodos(PeriodoID)
);

CREATE TABLE Periodos (
  PeriodoID int NOT NULL AUTO_INCREMENT,
  FechaInicio datetime NOT NULL,
  FechaFin datetime NOT NULL,
  Descripcion varchar NOT NULL,
  PRIMARY KEY (PeriodoID)
);

-- MODULO REPORTERIA
CREATE TABLE CategoriasProducto (
  CategoriaProductoID int NOT NULL AUTO_INCREMENT,
  NombreCategoria varchar NOT NULL,
  Descripcion text,
  PRIMARY KEY (CategoriaProductoID)
);

CREATE TABLE ReportesVentas (
  ReporteVentaID int NOT NULL AUTO_INCREMENT,
  FechaGeneracion datetime NOT NULL,
  CategoriaProductoID int NOT NULL,
  TipoReporte varchar NOT NULL,
  Descripcion text,
  PRIMARY KEY (ReporteVentaID),
  FOREIGN KEY (CategoriaProductoID) REFERENCES CategoriasProducto(CategoriaProductoID)
);

CREATE TABLE HistoricosVentas (
  HistoricoVentaID int NOT NULL AUTO_INCREMENT,
  TransaccionID int NOT NULL,
  FechaVenta datetime NOT NULL,
  MontoTotal decimal(10,2) NOT NULL,
  Descripcion text,
  PRIMARY KEY (HistoricoVentaID),
  FOREIGN KEY (TransaccionID) REFERENCES Transacciones(TransaccionID)
);

CREATE TABLE ExportacionesInventario (
  ExportacionID int NOT NULL AUTO_INCREMENT,
  FechaExportacion datetime NOT NULL,
  TipoFormato varchar NOT NULL,
  UsuarioID int NOT NULL,
  Descripcion text,
  PRIMARY KEY (ExportacionID),
  FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);

--MODULO ADMINISTRACION DE USUARIOS-SEGURIDAD
CREATE TABLE HorariosTrabajo (
  HorarioID int NOT NULL AUTO_INCREMENT,
  UsuarioID int NOT NULL,
  DiaSemana varchar NOT NULL,
  HoraInicio time NOT NULL,
  HoraFin time NOT NULL,
  PRIMARY KEY (HorarioID),
  FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);

CREATE TABLE RegistrosInicioSesion (
  RegistroID int NOT NULL AUTO_INCREMENT,
  UsuarioID int NOT NULL,
  FechaHoraInicio datetime NOT NULL,
  FechaHoraFin datetime,
  DuracionSesion interval,
  PRIMARY KEY (RegistroID),
  FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);

CREATE TABLE CopiasSeguridad (
  CopiaID int NOT NULL AUTO_INCREMENT,
  FechaHora datetime NOT NULL,
  TipoCopia varchar NOT NULL,
  Descripcion text,
  PRIMARY KEY (CopiaID)
);

CREATE TABLE RegistrosAuditoria (
  AuditoriaID int NOT NULL AUTO_INCREMENT,
  UsuarioID int NOT NULL,
  FechaHora datetime NOT NULL,
  Accion varchar NOT NULL,
  Descripcion text,
  PRIMARY KEY (AuditoriaID),
  FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);

--MODULO EMPLEADOS
CREATE TABLE HorariosEntradaSalida (
  RegistroID int NOT NULL AUTO_INCREMENT,
  UsuarioID int NOT NULL,
  Fecha date NOT NULL,
  HoraEntrada time NOT NULL,
  HoraSalida time NOT NULL,
  PRIMARY KEY (RegistroID),
  FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);

CREATE TABLE EvaluacionesDesempeno (
  EvaluacionID int NOT NULL AUTO_INCREMENT,
  EmpleadoID int NOT NULL,
  FechaEvaluacion datetime NOT NULL,
  Calificacion int NOT NULL,
  Comentarios text,
  Metas text NOT NULL,
  PRIMARY KEY (EvaluacionID),
  FOREIGN KEY (EmpleadoID) REFERENCES Usuarios(UsuarioID)
);

CREATE TABLE MetasEmpleado (
  MetaID int NOT NULL AUTO_INCREMENT,
  EvaluacionID int NOT NULL,
  Descripcion text NOT NULL,
  FechaInicio date NOT NULL,
  FechaFin date NOT NULL,
  Estado varchar NOT NULL,
  PRIMARY KEY (MetaID),
  FOREIGN KEY (EvaluacionID) REFERENCES EvaluacionesDesempeno(EvaluacionID)
);