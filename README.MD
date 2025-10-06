# TOP-to-do

Pequeña aplicación de lista de tareas (to-do list) desarrollada como parte del curso **The Odin Project**.

## ✨ Características

- Crear, editar y eliminar tareas  
- Marcar tareas como completadas  
- Agrupar tareas por proyectos  
- Guardado en `localStorage`  
- Interfaz limpia y funcional  
- Construido con **JavaScript**, **HTML**, **CSS** y **Webpack**

## 🛠️ Instalación

1. Clona este repositorio:  
   ```bash
   git clone https://github.com/jrcaravaca/TOP-to-do.git
   ```

2. Entra al directorio del proyecto:  
   ```bash
   cd TOP-to-do
   ```

3. Instala las dependencias:  
   ```bash
   npm install
   ```

## 🚀 Uso

Para ejecutar el proyecto en modo desarrollo:

```bash
npx webpack serve
```

Para construir la versión de producción:

```bash
npm run build
```

Luego abre `index.html` en tu navegador (o usa un servidor estático) para ver la aplicación.

## 🧩 Estructura del proyecto

```
TOP-to-do/
├── public/
│   └── img/             # Imágenes del proyecto
├── src/                 # Código fuente
│   ├── modules/         # Clases y lógica
│   ├── style/           # Archivos CSS o SCSS
│   └── index.js         # Punto de entrada principal
├── index.html
├── package.json
└── webpack.config.js
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas.  
Si deseas colaborar:

1. Haz un fork del repositorio  
2. Crea una rama (`git checkout -b mi-rama`)  
3. Realiza tus cambios y haz commits  
4. Envía un *pull request* explicando tus modificaciones  

## 📜 Licencia

Este proyecto se distribuye sin licencia específica.  
Puedes añadir una (por ejemplo, MIT) si lo deseas.