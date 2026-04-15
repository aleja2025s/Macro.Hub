# Macro Busqueda ACQ

Herramienta de busqueda de macros ACQ con interfaz morada estilo Nu.

## Estado actual

- Fecha de actualizacion: `2026-04-15`
- Vista nueva: `Wedukas` con 9 accesos directos
- UX nueva: tarjetas de Weduka 100% clickeables + etiqueta `Ir a Weduka`
- Entrada GitHub: `index.html` redirige a `index-actualizado-2026-04-06.html`

## Archivos para GitHub (subir en la raiz)

- `index.html` (entrada principal para GitHub Pages)
- `index-actualizado-2026-04-06.html` (app principal actualizada)
- `macros-acq.csv` (fuente principal de datos)
- `embedded-macros.js` (fallback embebido)
- `reactivacion-parsed.js` (soporte de contenido)
- `errores-flujo-parsed.js` (soporte de contenido)
- `README.md` (esta guia)

## Uso local rapido

- Abrir `index-actualizado-2026-04-06.html` con doble clic.
- Si estas en `file:///`, seleccionar `macros-acq.csv` cuando lo pida.

## Publicar en GitHub Pages

1. Crear repo nuevo en GitHub.
2. Subir los archivos listados arriba al root del repo.
3. Ir a `Settings` -> `Pages`.
4. En `Source`, elegir rama principal y carpeta `/ (root)`.
5. Abrir: `https://TU-USUARIO.github.io/TU-REPO/`

## Checklist de verificacion

- Abre la URL del repo y carga la app.
- Tabs visibles: `Buscador`, `Aprendizaje`, `Wedukas`.
- En `Wedukas`, cada tarjeta abre su documento al hacer clic.
- Busqueda y filtros funcionan en `Buscador`.

