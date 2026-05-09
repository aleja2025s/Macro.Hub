# 🟣 ACQ Macro Hub

**Herramienta centralizada de macros para el equipo de CX Acquisition — Nu Colombia**

Todo lo que necesitas para atender mejor, en un solo lugar: macros, guías, frases complementarias, tips operativos y recursos para el equipo de CX.

---

## ¿Qué es el Macro Hub?

El Macro Hub es una herramienta web interna que permite a los agentes de CX Acquisition consultar y copiar macros de atención por Contact Reason, ver frases complementarias y tips para cada macro, buscar por palabra clave, acceder a guías de aprendizaje y recursos de Weduka.

---

## Funcionalidades

- **Buscador de macros** — Filtra por Contact Reason, canal (Shuffle/Zendesk) y palabra clave
- **Frases complementarias** — Frases contextuales para adaptar la respuesta según el escenario del cliente (caja verde)
- **Tips para agentes** — Consejos operativos internos con verificaciones en Shuffle, widgets y flujos (caja lavanda)
- **Espacio de aprendizaje** — Guías prácticas de cuándo y cómo usar cada CR
- **Wedukas** — Recursos y materiales de formación del equipo
- **Favoritos** — Guarda las macros que más usas para acceso rápido
- **Tracking de uso** — Registro automático de accesos, macros copiadas, CRs consultados, búsquedas, favoritos y más (conectado a Google Sheets vía Apps Script)

---

## Contact Reasons incluidos

| CR | Macros |
|----|--------|
| Dudas sobre el Resultado de Solicitud | 18 |
| Registro, aplicación e información de productos Nu | 104 |
| Errores en el flujo de registro | 21 |
| Reactivación o adquisición de otros productos | 26 |
| Consulta o sugerencia de producto no ofertado | 4 |
| Dudas o problemas en la app después de iniciar sesión | 12 |
| Dudas sobre Campañas y Beneficios | 29 |
| Dudas o problemas con programa de referidos | 28 |
| **Total** | **242** |

---

## Archivos del repositorio

| Archivo | Descripción |
|---------|-------------|
| `macros-acq.csv` | Base de datos de las 242 macros con 7 columnas: Contact Reason, Nombre, Macro, Shuffle, Zendesk, Frases complementarias, Tip para el agente |
| `embedded-macros.js` | Fallback embebido con 455 macros (incluye macros de campañas y contenido adicional) |

---

## Estructura del CSV

| Columna | Descripción |
|---------|-------------|
| Contact Reason | Nombre de la contact reason a la que pertenece la macro |
| Nombre | Nombre completo de la macro (prefijo [ACQ]) |
| Macro | Texto de la macro mejorada (respuesta para el cliente) |
| Shuffle | Versión de la macro para el canal de Shuffle |
| Zendesk | Versión de la macro para Zendesk (con placeholders como `{{ticket.requester.first_name}}`) |
| Frases complementarias | Frases contextuales para adaptar la respuesta según el escenario del cliente |
| Tip para el agente | Consejos operativos internos (verificaciones en Shuffle, widgets, flujos) |

---

## Analytics — Google Sheets

La herramienta registra automáticamente el uso de los agentes en un Google Sheet con 6 pestañas:

| Pestaña | Descripción |
|---------|-------------|
| Registros | Log crudo de todos los eventos (login, logout, macros copiadas, CRs consultados, búsquedas, etc.) |
| Historial | Vista filtrable por agente, acción y fecha con colores alternos |
| Dashboard | Panel de KPIs: usuarios, logins, macros, CRs, búsquedas, sesiones, duración promedio, detalle de búsquedas y favoritos |
| Análisis | Análisis ejecutivo: patrones por hora/día, rendimiento por agente, búsquedas detalladas, wedukas consultados |
| Hallazgos | Insights automáticos con acciones sugeridas y desplegable de estado (Pendiente/En progreso/Resuelto/Descartado) |
| Resumen Ejecutivo | Reporte para líderes: KPIs, indicadores de sesión, Top 5 CRs, Top 5 Macros, Top Agentes, actividad por día, conclusiones clave |

### Eventos trackeados

- 🔑 Login / 🚪 Logout (con duración de sesión)
- 💓 Heartbeat (cada 2 min para sesiones activas)
- 📋 Macro copiada / 👁️ Macro expandida
- 📁 CR consultado
- 🔍 Búsqueda por palabra clave
- 📚 Weduka abierto
- ⭐ Favorito agregado/removido
- 📖 Aprendizaje abierto
- 🔄 Cambio de tab

---

## Stack técnico

- **Frontend:** HTML + CSS + JavaScript (single-file app servida por Apps Script)
- **Backend:** Google Apps Script (doGet, logEvent, getUserEmail, getMacroExtras)
- **Datos:** CSV hospedado en GitHub Pages
- **Analytics:** Google Sheets con 6 pestañas automáticas
- **Fuente:** Google Sans
- **Diseño:** Header morado (#820AD1), tabs fijos, KPIs con colores lila, gráficos de barras en Unicode

---

## Última actualización (2026-05-08)

- Se agregaron 24 macros nuevas para la campaña "Vive en modo Fútbol con Nu" en la CR "Dudas sobre Campañas y Beneficios"
- Se actualizó `embedded-macros.js` (de 431 a 455 macros)
- Se actualizó `macros-acq.csv` (de 218 a 242 macros) con columnas Shuffle y Zendesk formateadas

---

## Cómo actualizar las macros

1. Edita el archivo `macros-acq.csv` con las macros, frases y tips actualizados
2. Sube el archivo al repositorio (commit + push)
3. GitHub Pages actualiza automáticamente la URL pública
4. Los agentes verán los cambios la próxima vez que abran el Hub

---

## Equipo

Desarrollado por el equipo de **CX Ops — Acquisition**, Nu Colombia · 2026

**Nu Colombia · ACQ · 2026**
