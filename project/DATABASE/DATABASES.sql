-- Ejecutar Database En MYSQL.


create database nodomobiliario;
use nodomobiliario;

 CREATE TABLE acta_asignacion (
    id_acta_asignacion bigint NOT NULL,
    id_usuario_asignado bigint NOT NULL,
    fecha_acta date NOT NULL,
    id_usuario_elabora bigint NOT NULL,
	fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    observacion character varying(80) NOT NULL
);
 

  CREATE TABLE activo (
    id_activo bigint NOT NULL,
    id_articulo bigint NOT NULL,
    descripcion_activo text NOT NULL,
    codigo character varying(80) NOT NULL,
    serial character varying(80) NOT NULL,
    fecha_compra date NOT NULL,
    fecha_garantia date NOT NULL,
    avaluo numeric(15,2) NOT NULL,
    requiere_mantenimiento character(1) DEFAULT 'S' NOT NULL,
    periodicidad_mantenimiento character varying(10) NOT NULL,
    id_usuario_registra integer NOT NULL,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    id_usuario_actualiza bigint NOT NULL,
    fecha_actualiza DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    asignado_a bigint NOT NULL
);

 CREATE TABLE articulo (
    id_articulo bigint NOT NULL,
    id_categoria bigint NOT NULL,
    descripcion text NOT NULL,
    estado character(1) DEFAULT 'A' NOT NULL
);

  CREATE TABLE bodega (
    id_bodega bigint NOT NULL,
    descripcion character varying(80) NOT NULL,
    estado character(1) DEFAULT 'A' NOT NULL,
    prefijo character(4) NOT NULL
);

 CREATE TABLE categoria_articulo (
    id_categoria bigint NOT NULL,
    descripcion character varying(80) NOT NULL,
    estado character(1) DEFAULT 'A'
);

  CREATE TABLE centro_costo (
    id_centro_costo bigint NOT NULL,
    descripcion character varying(80) NOT NULL,
    estado character(1) DEFAULT 'A'
);

  CREATE TABLE detalle_acta_asignacion (
    id_detalle_asignacion bigint NOT NULL,
    id_acta_asignacion bigint NOT NULL,
    id_activo bigint NOT NULL
);

 CREATE TABLE detalle_orden_inventario (
    id_detalle_orden_inventario bigint NOT NULL,
    id_orden_inventario bigint NOT NULL,
    id_centro_costo bigint NOT NULL,
    id_articulo bigint NOT NULL,
    descripcion_articulo text NOT NULL,
    cantidad integer NOT NULL
);

 CREATE TABLE orden_inventario (
    id_orden_inventario bigint NOT NULL,
    id_tipo_movimiento bigint NOT NULL,
    id_bodega bigint NOT NULL,
    id_usuario_registra bigint NOT NULL,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    orden_no varchar(240),
    id_bodega_destino bigint NOT NULL,
    observacion text NOT NULL
);


CREATE TABLE tipo_documento (
    id_tipo_documento bigint NOT NULL,
    descripcion character varying(80) NOT NULL
);

  CREATE TABLE tipo_movimiento (
    id_tipo_movimiento bigint NOT NULL,
    descripcion character varying(80) NOT NULL,
    signo character(1) DEFAULT '+' NOT NULL
);

  CREATE TABLE usuario (
    id_usuario bigint NOT NULL,
    id_tipo_documento bigint NOT NULL,
    identificacion bigint NOT NULL,
    nombres character varying(80) NOT NULL,
    apellidos character varying(80) NOT NULL,
    genero character(1) DEFAULT 'M' NOT NULL,
    direccion character varying(80) NOT NULL,
    telefono character varying(45) NOT NULL,
    email character varying(80) NOT NULL,
    password character varying(80) NOT NULL
);

 CREATE TABLE perfil (
    id_perfil bigint NOT NULL,
    tipo_usuario character varying(20) NOT NULL,
    id_usuario bigint NOT NULL
);


 CREATE TABLE stock (
    id_articulo bigint NOT NULL,
    id_centro_costo bigint NOT NULL,
    id_bodega bigint NOT NULL,
    cantidad numeric(15,2) DEFAULT 0 NOT NULL
);

CREATE TABLE `userroot` (
  nombre varchar(50) NOT NULL,
  email varchar(200) NOT NULL,
  rool varchar(1) NOT NULL , -- /// A:ADMIN /// U:U   ///
  password varchar(200) NOT NULL --- Ya cambiado a lenght de 200 caracteres
) 

INSERT INTO userroot (nombre,email,rool,password) VALUES ("admin","admin@gmail.com","A","admin")

-- DIEZ REGISTROS GENERADOS POR CHAGPT PARA TESTING 

-------------------------------##########################################----------------------------------#-------------#-#-#--#-#-#-#-#
INSERT INTO acta_asignacion (id_acta_asignacion, id_usuario_asignado, fecha_acta, id_usuario_elabora, observacion) VALUES
(1, 101, '2023-10-01', 201, 'Primera observación'),
(2, 102, '2023-10-02', 202, 'Segunda observación'),
(3, 103, '2023-10-03', 203, 'Tercera observación'),
(4, 104, '2023-10-04', 204, 'Cuarta observación'),
(5, 105, '2023-10-05', 205, 'Quinta observación'),
(6, 106, '2023-10-06', 206, 'Sexta observación'),
(7, 107, '2023-10-07', 207, 'Séptima observación'),
(8, 108, '2023-10-08', 208, 'Octava observación'),
(9, 109, '2023-10-09', 209, 'Novena observación'),
(10, 110, '2023-10-10', 210, 'Décima observación');


INSERT INTO activo (id_activo, id_articulo, descripcion_activo, codigo, serial, fecha_compra, fecha_garantia, avaluo, requiere_mantenimiento, periodicidad_mantenimiento, id_usuario_registra, id_usuario_actualiza, asignado_a) VALUES
(1, 1, 'Computadora', 'C001', 'S001', '2023-01-01', '2024-01-01', 1500.00, 'S', 'Mensual', 301, 401, 101),
(2, 2, 'Impresora', 'C002', 'S002', '2023-02-01', '2024-02-01', 500.00, 'N', 'Anual', 302, 402, 102),
(3, 3, 'Teléfono', 'C003', 'S003', '2023-03-01', '2024-03-01', 200.00, 'S', 'Trimestral', 303, 403, 103),
(4, 4, 'Monitor', 'C004', 'S004', '2023-04-01', '2024-04-01', 300.00, 'N', 'Mensual', 304, 404, 104),
(5, 5, 'Teclado', 'C005', 'S005', '2023-05-01', '2024-05-01', 50.00, 'S', 'Anual', 305, 405, 105),
(6, 6, 'Mouse', 'C006', 'S006', '2023-06-01', '2024-06-01', 25.00, 'N', 'Trimestral', 306, 406, 106),
(7, 7, 'Proyector', 'C007', 'S007', '2023-07-01', '2024-07-01', 1000.00, 'S', 'Mensual', 307, 407, 107),
(8, 8, 'Altavoces', 'C008', 'S008', '2023-08-01', '2024-08-01', 150.00, 'N', 'Trimestral', 308, 408, 108),
(9, 9, 'Cable HDMI', 'C009', 'S009', '2023-09-01', '2024-09-01', 20.00, 'S', 'Anual', 309, 409, 109),
(10, 10, 'Cámara', 'C010', 'S010', '2023-10-01', '2024-10-01', 500.00, 'N', 'Mensual', 310, 410, 110);


INSERT INTO articulo (id_articulo, id_categoria, descripcion, estado) VALUES
(1, 1, 'Laptop', 'A'),
(2, 1, 'Tablet', 'A'),
(3, 2, 'Smartphone', 'A'),
(4, 3, 'Impresora Láser', 'A'),
(5, 3, 'Escáner', 'A'),
(6, 4, 'Monitor LED', 'A'),
(7, 4, 'Teclado Mecánico', 'A'),
(8, 5, 'Mouse Óptico', 'A'),
(9, 5, 'Proyector', 'A'),
(10, 6, 'Cámara Digital', 'A');


INSERT INTO bodega (id_bodega, descripcion, estado, prefijo) VALUES
(1, 'Bodega Central', 'A', 'BC01'),
(2, 'Bodega Norte', 'A', 'BN01'),
(3, 'Bodega Sur', 'A', 'BS01'),
(4, 'Bodega Este', 'A', 'BE01'),
(5, 'Bodega Oeste', 'A', 'BO01'),
(6, 'Bodega Equipos', 'A', 'EQ01'),
(7, 'Bodega Mobiliario', 'A', 'MB01'),
(8, 'Bodega Tecnología', 'A', 'TG01'),
(9, 'Bodega Papelería', 'A', 'PP01'),
(10, 'Bodega Mantenimiento', 'A', 'MT01');


INSERT INTO categoria_articulo (id_categoria, descripcion, estado) VALUES
(1, 'Electrónica', 'A'),
(2, 'Tecnología', 'A'),
(3, 'Oficina', 'A'),
(4, 'Mobiliario', 'A'),
(5, 'Herramientas', 'A'),
(6, 'Accesorios', 'A'),
(7, 'Repuestos', 'A'),
(8, 'Equipos Médicos', 'A'),
(9, 'Equipos de Comunicación', 'A'),
(10, 'Electrodomésticos', 'A');


INSERT INTO centro_costo (id_centro_costo, descripcion, estado) VALUES
(1, 'Administración', 'A'),
(2, 'Operaciones', 'A'),
(3, 'Logística', 'A'),
(4, 'Recursos Humanos', 'A'),
(5, 'Tecnología', 'A'),
(6, 'Mantenimiento', 'A'),
(7, 'Ventas', 'A'),
(8, 'Marketing', 'A'),
(9, 'Atención al Cliente', 'A'),
(10, 'Finanzas', 'A');




INSERT INTO detalle_acta_asignacion (id_detalle_asignacion, id_acta_asignacion, id_activo) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 6),
(7, 7, 7),
(8, 8, 8),
(9, 9, 9),
(10, 10, 10);


INSERT INTO detalle_orden_inventario (id_detalle_orden_inventario, id_orden_inventario, id_centro_costo, id_articulo, descripcion_articulo, cantidad) VALUES
(1, 1, 1, 1, 'Laptop', 5),
(2, 1, 2, 2, 'Tablet', 3),
(3, 2, 3, 3, 'Smartphone', 10),
(4, 2, 4, 4, 'Impresora Láser', 2),
(5, 3, 5, 5, 'Escáner', 4),
(6, 3, 6, 6, 'Monitor LED', 6),
(7, 4, 7, 7, 'Teclado Mecánico', 8),
(8, 4, 8, 8, 'Mouse Óptico', 15),
(9, 5, 9, 9, 'Proyector', 1),
(10, 5, 10, 10, 'Cámara Digital', 2);