export default function Totales({ datos }) {

    const totalEgreso = datos.amount.reduce((prev, current) => {if (datos.type == 'egreso') prev + current})

    const totalIngreso = datos.amount.reduce((prev, current) => {if (datos.type == 'ingreso') prev + current})

    const total = totalEgreso + totalIngreso;


    return (
        <>
          <p>Total ingresos: ${totalIngreso}</p>  
          <p>Total egresos: ${totalEgreso}</p>  
          <p>Total general: ${total}</p>  
        </>
    );
}