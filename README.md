# Macro Busqueda ACQ

Buscador interno de macros ACQ con interfaz estilo Nubank.

## Archivos del proyecto

- `index-actualizado-2026-04-06.html`: version principal actualizada (recomendada).
- `index.html`: version anterior/base.
- `embedded-macros.js`: soporte para datos embebidos.
- `macros-acq.csv`: fuente de datos principal.

## Funcionalidades incluidas (version actual)

- Filtro por `Contact Reason` (ordenado de mayor a menor por cantidad).
- Resumen lateral dinamico por Contact Reason.
- Resumen lateral colapsable/desplegable (inicia contraido).
- Tabs de canal:
  - `Todas`
  - `Macros chat`
  - `Macros Zendesk`
- Lista de macros compacta con numeracion.
- Bloque de desactivadas en lista compacta.
- Estilo visual mejorado con paleta morada.

## Uso local

### Opcion 1: abrir con doble clic

1. Abre `index-actualizado-2026-04-06.html`.
2. Si el navegador no carga CSV por `file:///`, usa el selector para cargar `macros-acq.csv`.

### Opcion 2: servidor local (recomendado)

Desde esta carpeta:

```bash
python3 -m http.server 8080
```

Luego abre:

- [http://localhost:8080/index-actualizado-2026-04-06.html](http://localhost:8080/index-actualizado-2026-04-06.html)

## Subir a GitHub

Sube estos 3 archivos como minimo:

- `index-actualizado-2026-04-06.html`
- `macros-acq.csv`
- `embedded-macros.js`

Opcional (recomendado):

- `README.md`

## Publicar en GitHub Pages

1. Ve al repositorio en GitHub.
2. Entra a `Settings` -> `Pages`.
3. En `Source`, selecciona la rama principal y carpeta `/ (root)`.
4. Guarda y espera el enlace de publicacion.
5. Abre:
   - `https://TU-USUARIO.github.io/TU-REPO/index-actualizado-2026-04-06.html`

## Checklist antes de publicar

- `macros-acq.csv` esta actualizado.
- Los conteos por Contact Reason son correctos.
- Tabs de canal filtran correctamente.
- Resumen lateral se despliega/contrae bien.
- Links de Zendesk abren correctamente.

