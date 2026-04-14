# Macro Busqueda ACQ

Buscador interno de macros ACQ con interfaz morada estilo Nu.

## Estado actual

- Actualizado: `2026-04-14`
- Fuente principal: `macros-acq.csv`
- Respaldo embebido sincronizado: `embedded-macros.js`
- Total de macros cargadas: `431`
- Ajustes visuales aplicados: portada full screen, secciones diferenciadas (Macro / Frases / Tip), y textos sin abreviaciones.
- Contenido operativo actualizado: Frases complementarias y Tip para el agente alineados con PDFs de referencia.

## Archivos (subir todos)

1. `index.html` (entrada principal para GitHub Pages)
2. `index-actualizado-2026-04-06.html` (app principal)
3. `macros-acq.csv` (datos fuente)
4. `embedded-macros.js` (fallback de datos embebidos)
5. `README.md` (guia del proyecto)

## Uso rapido local

- Doble clic en `index-actualizado-2026-04-06.html`.
- Si estas en `file:///` y no carga el CSV, usa el selector para elegir `macros-acq.csv`.
- Portada inicial: fondo morado full pantalla y elementos centrados.

## Publicar en GitHub Pages

1. Sube los 5 archivos listados arriba al root del repo.
2. Ve a `Settings` -> `Pages`.
3. En `Source`, elige rama principal y carpeta `/ (root)`.
4. Guarda.
5. Abre:
   - `https://TU-USUARIO.github.io/TU-REPO/`

## Verificacion antes de compartir

- Se abre desde la raiz (`/`) y redirige correctamente.
- Carga datos de `macros-acq.csv`.
- Filtros por Contact Reason funcionan.
- Tabs de canal (`Todas`, `Macros chat`, `Macros Zendesk`) funcionan.
- Links de Zendesk abren.

