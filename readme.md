# Aprendiendo JS y React pro:

## cosas que vi y necesito manejar

### - [x] jsx syntax

        - logica y template

### - [x] componetizar

        - export default
        - import

### - [x] Eventos y callBacks

        - Camel case
        - callbacks para evitar q el evento se ejecute en el render

### - [x] Estados y Props

        - Handle y set
        - estado y funcion de seteo
        - listas y como evitar repetidos setCart((prevCart) => [...prevCart, guitar])
        - key value = id
        - condiciones con metodos para filtrar resultados en array
        - .map ((i) =>{return})
        - inmutabilidad del estado
        - si toma un parametro en necesario un callback

### - [x] State derivado

        - Utilizan la información que ya habíamos guardado antes en otro estado y a partir de ahí algún calculo, cuenta, registro, etc. Se actualizan automáticamente con los cambios a los estados “normales”.
        - funciones en el lado de la logica del componente para sacar logica del template
        - ejecucion de la funcion

### - [] UseMemo

        - cambiando las funciones por el hook useMemo sacar la ejecucion de la funcion del render
        - cacheo y performance

### - [] carrito

        - pasando funciones por props
        - carrito al localStorage
        - state asincrono no se actualiza en el momento
        - useEffect para actualizar el carrito
        - useEffect para actualizar el carrito en el localStorage
        - useEffect para actualizar el carrito en el localStorage y el carrito
        - funcion de state para el carrito inicial
