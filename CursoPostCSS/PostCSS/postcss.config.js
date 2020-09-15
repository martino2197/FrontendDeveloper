module.exports = {
    plugins: [
        // require('autoprefixer') ({ //De esta manera estoy configurando el autoprefixer
        //     grid: true
        // }),
        require('postcss-apply'),
        require("postcss-preset-env") ({
            stage: 1, //postcss-preset-env permite el uso de custom-media sin embargo, es aceptado en el stage 1 de este plugin. Por defecto, si no especificamos el stage, postcss-preset-env tendrá por defecto el stage 2
            autoprefixer: {
                grid: true,
                flexbox: false,
            },
            preserve: true, //Valor por defecto de "true".Se asemeja a customProperties
            //true mantienen root
            //cambiar a false para notar el cambio
            calc: false, //Con esta configuración de postcss podemos evitar que la función calc sea transpilada por postcss, ya que es soportada por todos los navegadores.
        })
    ]
}