import Layout from '../../../../Layout';
import propiedades from '../../../../../assets/propiedades.json';
import ListaPropiedades from '../../../../../components/ListaPropiedades';

export default function Propiedades() {
    const usuario = 'agente-inmobiliario';

    return (
        <Layout items={["Inicio", "Clientes", "Agenda", "Propiedades"]} usuario={usuario}>
            <ListaPropiedades propiedades={propiedades} />
        </Layout>
    );
}