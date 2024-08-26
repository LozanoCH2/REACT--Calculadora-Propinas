# Aplicación Web de Calculadora de Propinas

En este proyecto se creo una calculadora de propinas, construida utilizando React, Vite y Tailwind CSS, donde el principal objetivo fue practicar y aprender a utilizar React como framework, implementando optimizaciones de rendimiento a través de la creación de componentes y el uso de hooks de React.

Puedes ver la aplicación en acción [aquí](https://react-calculadora-propinas.netlify.app).

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Hook Personalizado](#hook-personalizado)
- [Optimización de Rendimiento](#optimización-de-rendimiento)
  - [useMemo vs. useCallback](#usememo-vs-usecallback)
- [Conclusión](#conclusión)

## Descripción del Proyecto

Este proyecto le permite a los usuarios seleccionar varios alimentos del menú, los cuales se van agregando al apartado del consumo del cliente y el precio de cada uno de estos se va sumando en el total a pagar para generar la cuenta del cliente, asi mismo tambien permite seleccionar el porcentaje de propina  y eliminar alimentos del consumo si asi lo desea el cliente antes de realizar su pedido. La aplicación luego calcula y muestra el subtotal de la cuenta, el monto de la propina y el total de la cuenta.

## Tecnologías Utilizadas

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Una herramienta de construcción rápida que proporciona una experiencia de desarrollo moderna.
- **Tailwind CSS**: Un framework CSS de utilidades para desarrollo rápido de interfaces.

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tuusuario/calculadora-propinas.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd calculadora-propinas
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## Hook Personalizado

Durante el desarrollo de este proyecto, creé un hook personalizado para gestionar los inputs del formulario y los cálculos. Este hook encapsula la lógica para manejar los cambios en los inputs, calcular las propinas y los montos totales, y reiniciar el formulario.

## Optimización de Rendimiento

Para asegurar que la aplicación funcione de manera eficiente, dividí la interfaz de usuario en varios componentes. Esto me permitió aplicar optimizaciones de rendimiento en React, tales como:

- **useMemo**: Utilizado para memoizar cálculos costosos, evitando que se recalculen innecesariamente en cada render.
- **useCallback**: Utilizado para memoizar funciones de callback, evitando la recreación innecesaria de funciones en cada render.

### useMemo vs. useCallback

- **useMemo**: Devuelve un valor memoizado y es útil cuando necesitas evitar recalcular un valor a menos que sus dependencias hayan cambiado.
  
- **useCallback**: Devuelve una función memoizada y es útil cuando necesitas evitar recrear una función a menos que sus dependencias hayan cambiado.

En este proyecto, `useMemo` se utilizó para memoizar los cálculos de la propina y los montos totales, asegurando que estos cálculos solo se vuelvan a ejecutar cuando sea necesario. `useCallback` se utilizó para memoizar funciones manejadoras de eventos, reduciendo la sobrecarga de pasar nuevas instancias de funciones a los componentes hijos en cada render.

## Conclusión

Este proyecto sirvió para continuar mi aprendizaje sobre React, Vite y Tailwind CSS. A través de la construcción de esta calculadora de propinas, adquirí experiencia práctica con el modelo de componentes de React, sus hooks, y técnicas de optimización de rendimiento. El uso de `useMemo` y `useCallback` demostró ser valioso para mejorar el rendimiento de la aplicación, minimizando renders y recalculaciones innecesarias.
