const validator = (req, next, schema) =>{
    const options = {
        abortEarly: false, //Nutraukiam validacija po pirmos nesekmes
        allowUnknown: true, //jeigu perduosim duomenis, kuriu nera musu apibreztam objekte
        stripUnknown: true //Pasalinamos reiksmes, kurios nenurodytos schemoje
    }

    const {error, value} = schema.validate(req.body, options)

    if(error){
        next('Įvyko validacijos klaida')
    }else{
        req.body = value
        next()
    }
}

export default validator