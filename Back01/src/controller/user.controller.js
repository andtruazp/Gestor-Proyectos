import {pool} from '../database'

export const makeRegistro = async (req, res) =>{
    const { usuario, contrasena, rol } = req.body;
  if (!usuario || !contrasena) {
    return res.status(400).json({ error: 'Nombre de usuario y contraseña son obligatorios' });
  }
  const newUser = { usuario, contrasena, rol };
  await pool.query('INSERT INTO usuario SET ?', newUser, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al registrar el usuario' });
    }
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  });
}

export const login= async (req, res) =>{
  const { usuario, contrasena } = req.query;

  if (!usuario || !contrasena) {
    return res.status(400).json({ message: 'Por favor, proporcione usuario y contraseña' });
  }

  const query = 'SELECT * FROM usuario WHERE usuario = ? AND contrasena = ?';
  await pool.query(query, [usuario, contrasena], (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos: ' + err.message);
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    if (results.length > 0) {
      // El usuario ha iniciado sesión con éxito
      const idUsuario = results[0].id_usuario;
      const rolUsuario = results[0].rol;
      // Guarda el id_usuario en app.locals para que esté disponible en otras rutas
      app.locals.idUsuario = idUsuario;
      app.locals.rolUsuario = rolUsuario;
      //usuario
      const usuario = results[0];
      return res.status(200).json({ message: 'Inicio de sesión exitoso', usuario: {
        idUsuario,
        rolUsuario
      } });
    } else {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  });
}

export const getId = (req, res)=>{
  const id_us = app.locals.id_us;

  if (id_us) {
    // Utiliza el ID de usuario para realizar alguna acción
    res.status(200).json({ message: 'ID de usuario disponible', id_us });
  } else {
    res.status(401).json({ message: 'ID de usuario no disponible' });
  }
}

export const usuarios = async (req, res) => {
  await pool.query('SELECT * FROM usuario', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error en el servidor' });
      return;
    }
    res.status(200).json(results);
  });
}
