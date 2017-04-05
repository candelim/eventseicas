var fec = require('./date.js'),
        kaf = require('./kafkaCluster.js'),
        d = new Date,
	mayorista = Array(10001069,10001070,10001071,10001072),
        fecha = fec.formatDate(d),
        topicName = 'test_error_topic';

for (var ms=[],i=0;i<1;++i)
        ms[i] = '{"id":1900,"idMayorista":' + mayorista[Math.floor(Math.random()*mayorista.length)] + ',"idSubred":1,"idPdvMay":"990118","idPdvTp":"990118","tidPdv":"777990131","fechaTransPdv":"' + fecha + '","tipoTerminal":"APP_MOVIL","codTerminal":"HJM_TEST","tidTp":"000000000000000000000033125277","fechaTransTp":"' + fecha + '","nroLinea":"1134614414","plataformaRecarga":"CLASSIC","montoRecarga":"' + Math.floor((Math.random() * 100) + 5) + '.00","monedaRecarga":"032","saldo":13.66,"estadoRecarga":"OK","fechaUltMod":"' + fecha + '","tipoProducto":"Recarga","idMayPFE":"B605"}';

kaf.insert(ms,topicName);

