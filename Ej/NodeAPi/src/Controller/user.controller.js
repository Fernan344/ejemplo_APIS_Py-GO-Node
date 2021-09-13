const pool = require('../MySql/connection')

exports.prueba = async(req, res) => {
    res.send({"saludo": "Saludo desde el controlador de usuarios"});
}

exports.login = async(req, res) => {
    var {pass, email} = req.body;
    if(pass=="123456" && email=="ejemplo@ejemplo.com"){

        await pool.query('UPDATE MUNICIPIOS SET MUNICIPIO=? WHERE IDMUNICIPIO = ?', ["VILLA NUEVA", 1]);      

        res.send({"aut": true});
    }else{
        res.send({"aut": false});
    }

    
}