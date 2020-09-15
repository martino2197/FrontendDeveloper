module.exports = {
    plugins: [
        // require('autoprefixer') ({ //De esta manera estoy configurando el autoprefixer
        //     grid: true
        // }),
        require('postcss-apply'),
        require("postcss-preset-env") ({
            autoprefixer: {
                grid: true,
                flexbox: false,
            },
            preserve: true, //Valor por defecto de "true".Se asemeja a customProperties
            //true mantienen root
	        //cambiar a false para notar el cambio
        })
    ]
}