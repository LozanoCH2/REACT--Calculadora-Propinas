Aplicación Web de Calculadora de Propinas
Este proyecto es una sencilla aplicación web para calcular propinas, construida utilizando React, Vite y Tailwind CSS. El principal objetivo de este proyecto fue practicar y aprender a utilizar React como framework, implementando optimizaciones de rendimiento a través de la creación de componentes y el uso de hooks de React.

Puedes ver la aplicación en acción aquí.

Tabla de Contenidos
Descripción del Proyecto
Tecnologías Utilizadas
Instalación
Hook Personalizado
Optimización de Rendimiento
useMemo vs. useCallback
Conclusión
Descripción del Proyecto
La calculadora de propinas permite a los usuarios ingresar el monto de la cuenta, seleccionar el porcentaje de propina y, opcionalmente, dividir la cuenta entre varias personas. La aplicación luego calcula y muestra el monto de la propina por persona y el total por persona.

Tecnologías Utilizadas
React: Una biblioteca de JavaScript para construir interfaces de usuario.
Vite: Una herramienta de construcción rápida que proporciona una experiencia de desarrollo moderna.
Tailwind CSS: Un framework CSS de utilidades para desarrollo rápido de interfaces.
Instalación
Para ejecutar este proyecto localmente, sigue estos pasos:

Clona el repositorio:
bash
Copy code
git clone https://github.com/tuusuario/calculadora-propinas.git
Navega al directorio del proyecto:
bash
Copy code
cd calculadora-propinas
Instala las dependencias:
bash
Copy code
npm install
Inicia el servidor de desarrollo:
bash
Copy code
npm run dev
Hook Personalizado
Durante el desarrollo de este proyecto, creé un hook personalizado para gestionar los inputs del formulario y los cálculos. Este hook encapsula la lógica para manejar los cambios en los inputs, calcular las propinas y los montos totales, y reiniciar el formulario.

Optimización de Rendimiento
Para asegurar que la aplicación funcione de manera eficiente, dividí la interfaz de usuario en varios componentes. Esto me permitió aplicar optimizaciones de rendimiento en React, tales como:

useMemo: Utilizado para memoizar cálculos costosos, evitando que se recalculen innecesariamente en cada render.
useCallback: Utilizado para memoizar funciones de callback, evitando la recreación innecesaria de funciones en cada render.
useMemo vs. useCallback
useMemo: Devuelve un valor memoizado y es útil cuando necesitas evitar recalcular un valor a menos que sus dependencias hayan cambiado.

useCallback: Devuelve una función memoizada y es útil cuando necesitas evitar recrear una función a menos que sus dependencias hayan cambiado.

En este proyecto, useMemo se utilizó para memoizar los cálculos de la propina y los montos totales, asegurando que estos cálculos solo se vuelvan a ejecutar cuando sea necesario. useCallback se utilizó para memoizar funciones manejadoras de eventos, reduciendo la sobrecarga de pasar nuevas instancias de funciones a los componentes hijos en cada render.

Conclusión
Este proyecto sirvió como una excelente introducción a React, Vite y Tailwind CSS. A través de la construcción de esta calculadora de propinas, adquirí experiencia práctica con el modelo de componentes de React, sus hooks, y técnicas de optimización de rendimiento. El uso de useMemo y useCallback demostró ser valioso para mejorar el rendimiento de la aplicación, minimizando renders y recalculaciones innecesarias.
