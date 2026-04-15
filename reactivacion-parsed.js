window.REACTIVACION_ADQUISICION_ROWS = [
  {
    "code": "REACTIVACION.CUENTA-01",
    "title": "Ex-Cliente quiere reactivar CuentaNu — ¿Cómo volver a tener la cuenta de ahorros?",
    "macro": "¡Nos alegra saber que quieres volver a ser parte de Nu!\n\nSí, puedes reactivar tu Cuenta Nu siguiendo estos pasos:\n\n1. Ingresa al formulario 'Quiero ser Nu' en nu.com.co (web, App o WhatsApp).\n2. Usa el MISMO correo electrónico que tenías registrado con Nu.\n3. Selecciona la opción 'Ingresar'.\n4. Completa el flujo de registro con tus datos.\n5. Una vez completado, el proceso de liberación de tu cuenta puede tomar de 48 a  72 horas.\nCuando tu CuentaNu esté activa nuevamente, te notificaremos a través de tu correo electrónico registrado.",
    "shuffleChat": "Si el usuario no recuerda su correo anterior: “Puedo verificar en nuestro sistema cuál fue el correo que registraste originalmente. Dame un momento para revisarlo.”\nSi el usuario no tiene acceso a su correo anterior: “Por seguridad, necesitamos que uses el mismo correo. Si no tienes acceso a él, te voy a transferir al equipo de seguridad para que te asistan con la verificación de identidad.”\nSi el usuario ya completó el formulario pero no pasa nada: “El proceso puede tomar hasta 48 a 72 horas hábiles. Si después de ese tiempo no ves cambios, contáctanos nuevamente para revisar tu caso.”",
    "zendeskBody": "IMPORTANTE: El usuario DEBE usar el mismo correo electrónico registrado previamente. Si no tiene acceso al correo → transferir a Squad de Fraude."
  },
  {
    "code": "REACTIVACION.CUENTA-02",
    "title": "Cliente activo quiere reactivar CuentaNu cancelada",
    "macro": "¡Claro que sí! Como ya eres cliente Nu con tu Tarjeta de Crédito, puedes reactivar tu CuentaNu.\n\nSigue estos pasos:\n\n1. Ingresa al formulario 'Quiero ser Nu' (nu.com.co, App o WhatsApp).\n2. Usa el MISMO correo electrónico que tienes registrado con Nu.\n3. Recibirás una invitación en tu app.\n4. En la pantalla principal de tu app Nu, verás un banner que dice 'Abrir Cuenta Nu'.\n5. Haz clic en el banner y completa el registro. ¡Solo toma unos minutos!\n\nUna vez tu cuenta esté activa, te notificaremos por correo electrónico.",
    "shuffleChat": "Si el usuario no ve el banner después de registrarse: “El banner puede tomar entre 48  y 72 horas hábiles en aparecer. Si después de ese tiempo no lo ves, contáctanos para revisarlo.”\nSi el usuario pregunta si pierde beneficios de su TC: “No, tu Tarjeta de Crédito no se ve afectada. Simplemente estás añadiendo la Cuenta Nu a tus productos.”\nSi el usuario no tiene acceso a su correo: “Es necesario usar el mismo correo. Si no tienes acceso, te transfiero al equipo de seguridad para verificar tu identidad.”",
    "zendeskBody": "Verifica que el usuario sea CUSTOMER o RELEASED en Shuffle antes de dar estas instrucciones. Si el banner no aparece después de 72h → Secondary Job: ACQ | Oferta Cuenta Nu."
  },
  {
    "code": "REACTIVACION.CUENTA-03",
    "title": "Me registré en la web con el mismo correo pero no me llega la invitación",
    "macro": "Entendemos tu inquietud. Vamos a revisar el estado de tu solicitud.\n\nTen en cuenta que el proceso puede tomar de 48 a  72  horas hábiles después de completar el formulario.\n\nPara verificar:\n• Asegúrate de revisar tu bandeja de spam o correo no deseado.\n• Confirma que usaste exactamente el mismo correo que tenías registrado con Nu.\n\nSi ya pasaron más del tiempo y no has recibido nada, voy a escalar tu caso para que el equipo especializado lo revise.",
    "shuffleChat": "Si el correo usado es diferente al registrado: “Para la reactivación es indispensable usar el mismo correo que tenías con Nu. Intenta nuevamente con el correo original.”\nSi ya pasaron 48 a 72 hr sin respuesta: “Voy a crear un reporte para que nuestro equipo revise tu caso. Te notificaremos a través de tu correo registrado en las próximas 24 horas hábiles.”",
    "zendeskBody": "Revisa en Shuffle el correo registrado del usuario y compará con el que usó en el formulario. Si no coincide, ese es el problema."
  },
  {
    "code": "REACTIVACION.CUENTA-04",
    "title": "Solo me llegan correos de que mi cuenta está a salvo, ¿qué hago?",
    "macro": "Entendemos tu confusión. Los correos de 'tu cuenta está a salvo' son notificaciones automáticas de seguridad que se envían mientras tu cuenta está en proceso de reactivación.\n\nEsto es normal y significa que nuestro sistema está procesando tu solicitud. El correo de confirmación de reactivación es diferente y llegará una vez se complete el proceso.\n\nSi ya pasaron más de 48 a 72 horas hábiles desde tu registro y solo recibes estos correos de seguridad, contáctanos para que podamos revisar el estado de tu solicitud directamente.",
    "shuffleChat": "Si el usuario está preocupado por seguridad: “No te preocupes, esos correos son una medida de protección automática. Tu información está segura.”\nSi persiste después de 48 a 72h: “Vamos a escalar tu caso. Crearé un reporte para que el equipo especializado revise por qué la reactivación no se ha completado.”",
    "zendeskBody": ""
  },
  {
    "code": "REACTIVACION.CUENTA-05",
    "title": "Quiero reactivar pero solicité eliminación de datos",
    "macro": "Entendemos tu situación.\n\nAunque solicitaste la eliminación de tus datos, para reactivar tu cuenta necesitamos vincular tu nuevo registro con tu historial anterior por razones regulatorias y de seguridad.\n\nPor eso es necesario que uses el MISMO correo electrónico que tenías registrado previamente con Nu. Esto no significa que tus datos no fueron tratados conforme a tu solicitud — simplemente necesitamos verificar tu identidad para el nuevo proceso.\n\nSi tienes acceso a tu correo anterior, puedes continuar con el registro en nu.com.co usando la opción 'Ingresar'.",
    "shuffleChat": "Si el usuario insiste en usar un correo diferente: “Por regulación, necesitamos mantener la trazabilidad de tu cuenta. Es indispensable usar el mismo correo para garantizar la seguridad de tu información.”\nSi no tiene acceso al correo: “Te voy a transferir al equipo de seguridad para que te asistan con la verificación de identidad y puedan ayudarte con el proceso.”",
    "zendeskBody": "Si el usuario solicita eliminación de datos pero quiere reactivar, el correo original sigue siendo necesario. Transferir a Fraude si no tiene acceso."
  },
  {
    "code": "REACTIVACION.CUENTA-06",
    "title": "¿Por qué debo enviar fotos/información nuevamente?",
    "macro": "Entendemos que pueda parecer repetitivo, pero es una medida de seguridad importante.\n\nAl reactivar tu cuenta, necesitamos verificar que realmente eres tú quien está solicitando el proceso. Por regulación y protección de tu información, es necesario actualizar y confirmar tus datos de identidad.\n\nEste proceso es rápido: solo necesitas tomar una foto de tu documento de identidad y un selfie. Es una verificación estándar que protege tu cuenta contra uso no autorizado.",
    "shuffleChat": "Si el usuario se frustra: “Entiendo que es un paso adicional, pero es para tu seguridad. Te aseguro que es rápido y solo necesitas tu documento y una foto tuya.”\nSi hay problemas con la verificación: “Asegúrate de que las fotos estén bien iluminadas y que el documento sea legible. Si el problema persiste, contáctanos para revisarlo.”",
    "zendeskBody": ""
  },
  {
    "code": "REACTIVACION.CUENTA-07",
    "title": "¿Me llegará nueva tarjeta débito o me reactivan la cancelada?",
    "macro": "Al reactivar tu CuentaNu, se generará una NUEVA tarjeta débito.\n\nLa tarjeta débito anterior que tenías ya no estará activa, así que no podrás usarla. Como parte del proceso de reactivación, te enviaremos una tarjeta débito nueva a la dirección que registres.\n\nMientras tanto, podrás usar tu CuentaNu de forma digital para transferencias, pagos y demás operaciones desde la app.",
    "shuffleChat": "Si pregunta cuánto tarda en llegar la tarjeta: “La tarjeta débito física puede tomar entre 10 y 15 días hábiles en llegar a tu dirección. Mientras tanto, tu cuenta digital estará completamente operativa.”\nSi la tarjeta no llega o hay inconsistencias: “Voy a generar un reporte para que el equipo revise el envío de tu tarjeta física. Te notificaremos por correo.”",
    "zendeskBody": "Si el usuario reactivó CuentaNu pero no le emitieron tarjeta débito nueva, verifica Widget Cuenta Nubank → Historial. Si la cuenta fue cancelada y reactivada sin nueva tarjeta → Secondary Job: ACQ | Incon. Gen. T.Fisica."
  },
  {
    "code": "REACTIVACION.CUENTA-08",
    "title": "¿Puedo tener la Cuenta Nu si cancelé la Tarjeta de Crédito?",
    "macro": "¡Claro que sí! La cancelación de tu Tarjeta de Crédito no impide que puedas tener una Cuenta Nu.\n\nPara iniciar el proceso:\n1. Ingresa al formulario 'Quiero ser Nu' en nu.com.co.\n2. Usa el MISMO correo electrónico que tenías registrado.\n3. Selecciona la opción 'Ingresar' y completa el flujo de registro.\n\nEl proceso toma solo unos minutos y tu CuentaNu estará disponible una vez completemos la verificación.",
    "shuffleChat": "Si pregunta si puede volver a tener TC: “La reactivación de Tarjeta de Crédito cancelada no es posible. Sin embargo, una vez tengas tu CuentaNu activa, nuestro sistema podría evaluar tu perfil para futuras ofertas de TC.”\nSi pregunta cómo ocultar la TC cancelada: “Actualmente no es posible ocultar productos cancelados de la app. Entendemos que puede ser incómodo verlo, pero no afecta el funcionamiento de tus productos activos.”\n\n\n\n\n\n2. Reactivación de Tarjeta de Crédito (Ex-Cliente)\n\nREGLA CLAVE: La reactivación de Tarjeta de Crédito NO es posible\nEn NINGÚN escenario un ex-cliente puede reactivar su Tarjeta de Crédito cancelada.\n\nEsto aplica independientemente de:\n  • Cuánto tiempo ha pasado desde la cancelación.\n  • Si el usuario tiene CuentaNu activa.\n  • Si el usuario solicita hablar con un supervisor.\n\nLa única opción es que el usuario adquiera una NUEVA TC a través del proceso de evaluación estándar, si nuestro sistema le presenta una oferta en el futuro.",
    "zendeskBody": ""
  },
  {
    "code": "REACTIVACION.TARJETA-01",
    "title": "Ex-Cliente quiere reactivar su Tarjeta de Crédito — No es posible",
    "macro": "Entendemos tu interés en volver a tener una Tarjeta de Crédito Nu.\n\nLamentablemente, una vez cancelada, la Tarjeta de Crédito no puede ser reactivada. Esta es una condición que aplica en todos los casos.\n\nSin embargo, queremos contarte que nuestro sistema evalúa perfiles continuamente. Si en el futuro hay una oferta de Tarjeta de Crédito disponible para ti, te la comunicaremos directamente en tu app y por correo electrónico.\n\nMientras tanto, te invitamos a conocer los beneficios de nuestra Cuenta Nu: sin cuota de manejo, transferencias gratuitas, rendimiento en Cajitas y mucho más.",
    "shuffleChat": "Si el usuario insiste o pide hablar con un supervisor: “Entiendo tu frustración y lamento no poder darte la respuesta que esperas. Esta es una política que aplica para todos los casos sin excepción. Lo que sí puedo hacer es asegurarme de que tu perfil esté actualizado para futuras ofertas.”\nSi pregunta cuánto tiempo toma recibir una nueva oferta: “No podemos garantizar un tiempo específico, ya que depende de la evaluación interna de nuestro sistema. Cuando haya algo disponible, te lo comunicaremos.”\nSi el usuario tiene CuentaNu activa: “Tu CuentaNu sigue activa y con todos sus beneficios. Te recomendamos seguir usándola, ya que esto puede contribuir positivamente a futuras evaluaciones.”",
    "zendeskBody": "NUNCA des esperanzas de reactivación de TC. No existe ningún proceso ni excepción. Redirige siempre hacia los beneficios de CuentaNu y la posibilidad futura de una nueva oferta."
  },
  {
    "code": "REACTIVACION.TARJETA-03",
    "title": "Recontacto de usuario que ya preguntó por reactivación de TC",
    "macro": "Entendemos tu situación y agradecemos que nos contactes nuevamente.\n\nConfirmamos que, lamentablemente, la política de reactivación de Tarjeta de Crédito no ha cambiado. Una vez cancelada, no es posible reactivarla en ningún escenario.\n\nSabemos que esta no es la respuesta que esperas y valoramos tu interés en nuestros productos. Lo que sí podemos asegurarte es que nuestro sistema sigue evaluando perfiles para nuevas ofertas. Si surge una oportunidad, te la comunicaremos directamente.\n\nMientras tanto, tu CuentaNu está disponible con todos sus beneficios.",
    "shuffleChat": "Si el usuario expresa frustración: “Entiendo completamente tu molestia. Tu feedback es importante para nosotros y lo tendremos en cuenta. Lamento no poder ayudarte con este tema específico.”\nSi pide escalar el caso: “Respeto tu solicitud, pero esta es una política que aplica de manera uniforme. Ningún nivel de escalamiento puede modificarla. Lo que sí puedo hacer es asegurarme de que tus comentarios sean registrados.”",
    "zendeskBody": "Sé especialmente empático con recontactos. El usuario ya recibió la noticia antes y vuelve frustrado. Valida su emoción primero, confirma la información después."
  },
  {
    "code": "REACTIVACION.TARJETA-04",
    "title": "¿Cómo ocultar o eliminar el producto cancelado de TC?",
    "macro": "Entendemos que puede resultar incómodo ver el producto cancelado en tu app.\n\nActualmente, no es posible ocultar o eliminar los productos cancelados de la vista de la aplicación. Es un registro histórico de tus productos con Nu.\n\nTen la tranquilidad de que el producto cancelado no afecta el funcionamiento de tus demás productos activos ni genera ningún cobro.",
    "shuffleChat": "Si el usuario insiste: “Entendemos tu solicitud. Lamentablemente esta funcionalidad no está disponible por el momento, pero tu feedback es valioso y será compartido con nuestro equipo de producto.”\n\n\n\n\n\n3. Cross-sell: Cliente con TC quiere CuentaNu\n\nFlujo de verificación para Cross-sell TC → CuentaNu\n1. Verifica en Widget Prospects el estado de Cross-Sell:\n   • Pending → Oferta activa. Guiar al usuario a completar el flujo (CROSSSELL.CUENTA-02).\n   • Expired o sin oferta → Crear Secondary Job (CROSSSELL.CUENTA-01 / CROSSSELL.CUENTA-04).\n\n2. Si se crea Secondary Job:\n   • El banner aparece en 48-72 horas hábiles.\n   • La oferta tiene vigencia de 45 días calendario.\n   • Notificación por correo electrónico.",
    "zendeskBody": ""
  },
  {
    "code": "CROSSSELL.CUENTA-01",
    "title": "Cliente no le aparece el banner de Cuenta Nu — Oferta expiró",
    "macro": "Entendemos tu situación. Vamos a ayudarte.\n\nDespués de revisar tu caso, la oferta de Cuenta Nu que tenías disponible expiró. No te preocupes: vamos a generar una nueva oferta para ti.\n\nEn las próximas 48 a  72 horas hábiles, podrás ver el banner de 'Abrir mi Cuenta Nu' en la pantalla principal de tu app. Esta nueva oferta tendrá una vigencia de 45 días.\n\nTe notificaremos a través de tu correo electrónico registrado cuando la oferta esté lista.\n\nSi dentro de ese tiempo no ves el banner, por favor vuelve a contactarnos.",
    "shuffleChat": "Si el usuario pregunta por qué expiró: “Las ofertas de productos tienen un periodo de vigencia. En este caso, la oferta tenía un límite de tiempo que ya pasó. Pero no te preocupes, estamos generando una nueva para ti.”\nSi quiere que sea más rápido: “Entiendo tu urgencia. El proceso de generación de la nueva oferta toma entre 48  y 72 horas hábiles y no podemos acelerarlo, pero estará disponible pronto.”",
    "zendeskBody": "Crear Secondary Job: ACQ | Oferta Cuenta Nu. Recuerda informar los tiempos: 48-72h hábiles para el banner, 45 días de vigencia."
  },
  {
    "code": "CROSSSELL.CUENTA-02",
    "title": "¿Cómo inicio el registro para abrir Cuenta Nu? (Oferta disponible)",
    "macro": "¡Excelente! Nos alegra tu interés en la Cuenta Nu.\n\nPara comenzar el proceso, sigue estos pasos:\n\n1. Tu dispositivo debe estar autorizado. Si te pide autorizarlo, sigue las instrucciones en la app.\n2. En la pantalla principal de tu app Nu, busca el banner que dice 'Abrir mi Cuenta Nu' y haz clic.\n3. Confirma tus datos y configura tu producto.\n\n¡Y listo! El proceso toma solo unos minutos. Una vez tu cuenta esté activa, te notificaremos por correo electrónico para que empieces a disfrutar de todos los beneficios.",
    "shuffleChat": "Si no ve el banner pero la oferta está pending: “Asegúrate de tener la última versión de la app Nu. Cierra la app completamente y ábrela de nuevo. El banner debería aparecer en la pantalla principal.”\nSi le pide autorizar dispositivo: “Es un paso de seguridad normal. Sigue las instrucciones que te muestra la app para autorizar tu dispositivo móvil.”\nSi el proceso dice que verificarán datos: “No te preocupes, es un proceso estándar de verificación. Te notificaremos por correo cuando todo esté listo.”",
    "zendeskBody": "Verifica en Prospects que la oferta esté en estado 'Pending' antes de dar estas instrucciones. Si no hay oferta o está expirada, usa CROSSSELL.CUENTA-01."
  },
  {
    "code": "CROSSSELL.CUENTA-03",
    "title": "Oferta de Cuenta Nu liberada en la app (Agentes de ACQ)",
    "macro": "La oferta para abrir tu Cuenta Nu ya está disponible en tu app.\n\nPara iniciar el proceso de registro, sigue estos pasos:\n\n1. Entra a tu app Nu. Si te pide autorizar tu dispositivo móvil, sigue las instrucciones.\n2. En la pantalla de inicio, busca la opción 'Abrir mi Cuenta Nu' y tócala.\n\n¡Solo te tomará unos minutos verificar y/o actualizar tus datos!\n\nCuando tu nueva cuenta esté lista, te avisaremos con una notificación en tu correo electrónico registrado.",
    "shuffleChat": "Si el usuario aún no ve el banner: “Asegúrate de actualizar tu app a la última versión. Si después de 72 horas hábiles aún no ves la opción, contáctanos para revisarlo.”\nSi ya expiró la nueva oferta también: “Vamos a generar una nueva oferta. Recuerda que la oferta tiene vigencia de 45 días, así que te recomendamos completar el proceso lo antes posible.”",
    "zendeskBody": "Esta macro es para AGENTES que están dando seguimiento a un Secondary Job ya resuelto. Confirma en Shuffle que la oferta fue liberada antes de enviar."
  },
  {
    "code": "CROSSSELL.CUENTA-04",
    "title": "Banner no aparece — Oferta expirada o no visible en la app",
    "macro": "Entendemos tu situación. Vamos a resolverlo.\n\nHemos generado un reporte con nuestro equipo encargado para generar una nueva oferta en tu app Nu, de modo que puedas abrir tu cuenta de ahorros.\n\nTen en cuenta que este proceso puede tardar hasta 24 horas hábiles y te notificaremos a través del correo electrónico que tienes registrado con nosotros.\n\nEsta nueva oferta en tu app tendrá una vigencia de 45 días.",
    "shuffleChat": "Si ya le habían generado una oferta antes: “Vamos a generar una nueva oferta para ti. Te recomendamos completar el proceso tan pronto veas el banner para no perder la vigencia.”\nSi pregunta por qué no aparece: “Puede ser por varias razones técnicas. Nuestro equipo especializado se encargará de resolverlo y te notificará cuando esté listo.”",
    "zendeskBody": "Crear Secondary Job: ACQ | Oferta Cuenta Nu. Verificar en Prospects si hay alguna oferta previa expirada o si nunca se generó."
  },
  {
    "code": "CROSSSELL.CUENTA-05",
    "title": "¿En cuánto tiempo se expira la oferta de Cuenta Nu en la App?",
    "macro": "La oferta de Cuenta Nu en tu app tiene una vigencia de 45 días calendario desde que fue generada.\n\nTe recomendamos completar el proceso lo antes posible para no perder la oferta. Si la oferta expira, podemos solicitar una nueva, pero el proceso toma entre 48  y 72 horas hábiles adicionales.\n\nEl proceso de registro solo toma unos minutos. ¿Te gustaría que te guiemos paso a paso?",
    "shuffleChat": "Si la oferta ya expiró: “No te preocupes, podemos generar una nueva oferta para ti. En 48 a 72 a 72 horas hábiles verás el banner nuevamente en tu app.”\nSi el usuario quiere pensarlo: “Sin problema. Recuerda que tienes 45 días para decidir. Cuando estés listo, solo busca el banner 'Abrir mi Cuenta Nu' en la pantalla principal de tu app.”\n\n\n\n\n\n4. Cross-sell: Cliente con CuentaNu quiere TC\n\nFlujo de verificación para Cross-sell CuentaNu → TC\nHay 4 escenarios posibles. Verifica en Widget Prospects:\n\nOpción 1: Sin oferta o expirada → Redirigir a CR 'Dudas sobre Resultado de Solicitud'.\nOpción 2: Con opción + Shuffle pending → Guiar al flujo 'Solicitar Tarjeta'.\nOpción 3: Con opción pero SIN Shuffle pending → Orientar sobre proceso de evaluación.\nOpción 4: Email recibido + Shuffle pending pero SIN banner → Secondary Job.\n\nTipos de tarjeta posibles (verificar en Offers → Prospects):\n  • Tradicional\n  • NuControl\n  • Tarjeta Morada Abre Caminos",
    "zendeskBody": ""
  },
  {
    "code": "CROSSSELL.TARJETA-01",
    "title": "¿Cómo inicio el registro para tener Tarjeta de Crédito? (Oferta disponible)",
    "macro": "¡Excelente noticia! Tienes una oferta de Tarjeta de Crédito disponible.\n\nPara comenzar el proceso:\n\n1. En tu app Nu, busca el botón 'Solicitar Tarjeta' en la pantalla principal.\n2. Sigue el flujo de solicitud completando tus datos.\n3. Nuestro sistema realizará una evaluación y te notificará el resultado.\n\nEl proceso toma solo unos minutos. Te informaremos por correo electrónico cuando tengamos una respuesta sobre tu solicitud.",
    "shuffleChat": "Si el usuario pregunta qué tipo de tarjeta es: “Puedo verificar en nuestro sistema qué tipo de tarjeta está disponible para ti. Dame un momento. [Verificar en Offers → Prospects: Tradicional, NuControl o Tarjeta Morada Abre Caminos].”\nSi le pide verificar datos o dice que tomará tiempo: “Es un proceso estándar de verificación. En algunos casos se requiere una revisión adicional. Te notificaremos por correo tan pronto tengamos un resultado.”",
    "zendeskBody": "Verificar en Prospects que haya Shuffle pending Y que el botón 'Solicitar Tarjeta' esté visible. Si tiene oferta pero no Shuffle pending → usar CROSSSELL.TARJETA-03."
  },
  {
    "code": "CROSSSELL.TARJETA-02",
    "title": "Sin oferta o oferta expirada de TC — Redirigir a Resultado de Solicitud",
    "macro": "Entendemos tu interés en tener una Tarjeta de Crédito Nu.\n\nActualmente, nuestro sistema no tiene una oferta de Tarjeta de Crédito disponible para tu perfil. Las ofertas de TC se generan a través de un proceso de evaluación interno que considera múltiples factores.\n\nPara conocer más detalles sobre el proceso de evaluación y los factores que se consideran, te vamos a redirigir con nuestro equipo especializado en Resultado de Solicitud, quienes podrán brindarte mayor información.\n\nCuando haya una oferta disponible para ti, la verás directamente en tu app.",
    "shuffleChat": "Si el usuario pregunta qué puede hacer para mejorar su perfil: “Mantener un uso activo de tu CuentaNu y un buen comportamiento financiero son factores positivos. Nuestro sistema evalúa continuamente y te notificará cuando haya una oferta.”\nSi el usuario se frustra: “Entiendo tu molestia. Nuestro sistema busca ofrecer productos que se adapten a cada perfil. Cuando tengamos algo disponible para ti, te lo comunicaremos.”",
    "zendeskBody": "NO crear Secondary Job para este escenario. Redirigir a CR 'Dudas sobre Resultado de Solicitud'. El usuario no tiene oferta y no se puede forzar una."
  },
  {
    "code": "CROSSSELL.TARJETA-03",
    "title": "Tiene opción de TC pero en estado pending",
    "macro": "Gracias por contactarnos. Vamos a revisar el estado de tu oferta.\n\nVerificamos que hay una oferta de Tarjeta de Crédito registrada para tu perfil, pero el proceso de evaluación aún no se ha completado.\n\nTe pedimos que por favor ingreses y lo completes\n\nTu perfil está siendo evaluado para una de estas opciones:\n• Tarjeta de Crédito Tradicional\n• NuControl (tarjeta con límite de garantía)\n• Tarjeta Morada Abre Caminos\n\nEl resultado de la evaluación te será comunicado por correo electrónico y/o a través de tu app. Te pedimos estar pendiente.",
    "shuffleChat": "Si pregunta cuánto tarda: “El proceso de evaluación puede tomar algunos días. Te notificaremos en cuanto tengamos un resultado.”\nSi pregunta qué tipo de tarjeta le ofrecerán: “El tipo de tarjeta depende de la evaluación de tu perfil. Puedo ver en nuestro sistema qué tipo está en proceso. [Verificar en Offers → Prospects].”",
    "zendeskBody": "Verificar en Prospects → Offers qué tipo de producto está en evaluación. Si no hay Shuffle pending pero sí hay oferta registrada, el proceso está en curso."
  },
  {
    "code": "CROSSSELL.TARJETA-04",
    "title": "Recibió email de TC pero no ve el banner",
    "macro": "Entendemos tu situación. Vamos a resolverlo.\n\nConfirmamos que tienes una oferta de Tarjeta de Crédito activa y la notificación fue enviada correctamente. Sin embargo, el banner no se está mostrando en tu app.\n\nVamos a crear un reporte para que nuestro equipo técnico lo revise y solucione. Recibirás una notificación a través de tu correo registrado una vez el problema sea resuelto.\n\nMientras tanto, te recomendamos mantener tu app actualizada a la última versión.",
    "shuffleChat": "Si el usuario quiere que sea urgente: “Entiendo tu urgencia. El equipo técnico lo revisará lo antes posible. El tiempo estimado de respuesta es de 24 horas hábiles.”\nSi ya le habían generado un reporte antes: “Voy a crear un nuevo reporte para darle seguimiento a tu caso. Lamento los inconvenientes.”",
    "zendeskBody": "Crear Secondary Job para este caso. Verificar en Shuffle que efectivamente haya Shuffle pending pero el banner no sea visible."
  },
  {
    "code": "CROSSSELL.TARJETA-05",
    "title": "¿En cuánto tiempo se expira la oferta de TC en la App?",
    "macro": "Sí, las ofertas de Tarjeta de Crédito tienen un periodo de vigencia.\n\nTe recomendamos completar el proceso de solicitud lo antes posible para asegurar que la oferta siga disponible. Si la oferta expira, no podemos garantizar que se genere una nueva.\n\n¿Te gustaría que te guiemos ahora mismo con el proceso de solicitud?",
    "shuffleChat": "Si la oferta ya expiró: “Lamentablemente, la oferta de Tarjeta de Crédito que tenías ya expiró. Nuestro sistema sigue evaluando perfiles. Te notificaremos si hay una nueva oferta disponible.”\nSi quiere pensarlo más: “Entendemos. Te recomendamos no esperar demasiado para no perder la oferta. Cuando estés listo, busca el botón 'Solicitar Tarjeta' en tu app.”",
    "zendeskBody": "A diferencia de la oferta de CuentaNu (45 días), para TC no siempre se puede regenerar la oferta. Enfatiza la importancia de aprovecharla."
  },
  {
    "code": "CROSSSELL.TARJETA-06",
    "title": "¿A qué hace referencia la pregunta FACTA sobre impuestos en otro país?",
    "macro": "¡Gracias por tu confianza! Para nosotros es muy importante cumplir con las normas vigentes.\n\nLa pregunta sobre si declaras impuestos en otro país es un requisito regulatorio conocido como FATCA/CRS. Necesitamos saber si tienes obligaciones tributarias (como declarar impuestos) en países diferentes a Colombia.\n\nTen la tranquilidad de que estos datos son para uso exclusivo de Nu y están protegidos por nuestra Política de Tratamiento de Datos.\n\nPuedes consultarla en nu.com.co o directamente en: https://contracts.nu.com.co/legal-documents/nu-CF-data-policy-version-2.pdf",
    "shuffleChat": "Si el usuario tiene dudas sobre qué responder: “Si NO tienes obligaciones tributarias en países diferentes a Colombia, simplemente responde que no. Si sí las tienes, te pediremos algunos datos adicionales.”\nSi le preocupa la privacidad: “Toda la información que compartes está protegida y es tratada conforme a las regulaciones colombianas de protección de datos.”",
    "zendeskBody": "Esta pregunta aparece tanto en el flujo de CuentaNu como en el de TC. Es un requisito regulatorio, no opcional."
  },
  {
    "code": "CROSSSELL.TARJETA-07",
    "title": "¿Por qué al terminar el proceso me dice que verificarán mis datos?",
    "macro": "Tu seguridad es lo más importante para nosotros.\n\nVerificamos la información que todos nuestros usuarios nos comparten como medida de protección. En algunos casos, podemos pedirte datos adicionales, por lo que te pedimos estar pendiente de tu correo electrónico registrado.\n\nSi esto sucede, el proceso podría tomar un poco más de tiempo.\n\n¡Pero no te preocupes! Tan pronto nuestro equipo especializado termine esta revisión, te notificaremos por correo para que puedas disfrutar de todos los beneficios.",
    "shuffleChat": "Si el usuario pregunta cuánto tarda: “La verificación puede tomar algunos días hábiles. Te pedimos paciencia y estar pendiente de tu correo.”\nSi le piden información adicional: “Es un paso normal del proceso. Envía la información solicitada lo antes posible para agilizar la verificación.”\n\n\n\n\n\n5. Errores e Inconsistencias",
    "zendeskBody": ""
  },
  {
    "code": "INCONSISTENCIA-01",
    "title": "Widget Cards muestra 'El cliente no tiene tarjetas' — Error en reactivación",
    "macro": "Entendemos tu preocupación. Vamos a revisar tu caso.\n\nHemos identificado una inconsistencia en tu cuenta que necesita ser revisada por nuestro equipo especializado.\n\nVoy a crear un reporte para que el equipo técnico resuelva esta situación. El tiempo estimado de respuesta es de 24 horas hábiles.\n\nTe notificaremos a través de tu correo electrónico registrado una vez el problema sea resuelto.",
    "shuffleChat": "Si el usuario necesita usar su tarjeta urgentemente: “Entiendo la urgencia. Nuestro equipo revisará esto con prioridad. Mientras tanto, puedes usar la app para transferencias y otras operaciones desde tu CuentaNu.”\nSi el error persiste después de 24h: “Voy a escalar nuevamente tu caso con prioridad alta. Lamento los inconvenientes.”",
    "zendeskBody": "Crear Secondary Job. Verificar Widget Cards en Shuffle — si muestra 'El cliente no tiene tarjetas' cuando sí debería tenerlas, es un error del sistema que requiere escalamiento."
  },
  {
    "code": "INCONSISTENCIA-02",
    "title": "CuentaNu reactivada pero no se emitió tarjeta débito — Caso especial",
    "macro": "Gracias por reportar esta situación. Vamos a resolverla.\n\nHemos verificado que tu CuentaNu fue reactivada exitosamente, pero la emisión de tu nueva tarjeta débito no se procesó correctamente.\n\nVoy a crear un reporte especializado para que el equipo técnico genere la emisión de tu tarjeta débito. El tiempo estimado de respuesta es de 24 horas hábiles.\n\nMientras tanto, tu CuentaNu está completamente operativa de forma digital: puedes hacer transferencias, recibir dinero y usar todos los servicios desde la app.",
    "shuffleChat": "Si pregunta cuándo llegará la tarjeta: “Primero necesitamos que el equipo técnico procese la emisión (24h hábiles). Después de eso, la tarjeta tomará entre 10 y 15 días hábiles en llegar.”\nSi el usuario está molesto: “Entiendo tu frustración. Este es un caso excepcional que vamos a resolver con prioridad. Tu cuenta digital funciona completamente mientras tanto.”",
    "zendeskBody": "Crear Secondary Job: ACQ | Incon. Gen. T.Fisica. Verificar Widget Cuenta Nubank → Historial: la cuenta debe mostrar estado 'Cancelada → Reactivada' sin nueva tarjeta emitida."
  }
];
