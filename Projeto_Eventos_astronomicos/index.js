import colecaoChuvasDeMeteoros from "./data/chuva_de_meteoros.js";
import {verificaChuvaVisivelPorData, verificaChuvaVisivelProximos2Meses} from "./funcoes/funcoes_Logicas.js";
import imprimeListaDeChuvas from "./funcoes/interface.js";

const dataAtual = new Date();
const chuvasVisiveisHoje = colecaoChuvasDeMeteoros.filter(
    (chuva)=> verificaChuvaVisivelPorData(chuva, dataAtual)
);

const chuvasVisiveisProximos2Meses = colecaoChuvasDeMeteoros.filter(
    (chuva)=> verificaChuvaVisivelProximos2Meses(chuva, dataAtual)
);

console.log('Chuva de meteoros');

if ( chuvasVisiveisHoje.length > 0 ) {
    let msg = "\nEncontramos ";
    msg += chuvasVisiveisHoje.length == 1 ? '1 chuva de meteoros que pode ser vista hoje' : chuvasVisiveisHoje.length + ' chuvas de meteoros que podem ser vistas hoje';

    console.log(msg);
    imprimeListaDeChuvas(chuvasVisiveisHoje);

} else {
    console.log('\nNenhuma chuva de meteoros passando no momento');
}

console.log('\nNão perca as próximas chuvas de meteoros:');
imprimeListaDeChuvas(chuvasVisiveisProximos2Meses);