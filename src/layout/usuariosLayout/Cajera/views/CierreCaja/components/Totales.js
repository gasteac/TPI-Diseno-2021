export default function Totales({ datos }) {

    const montoEgreso = datos.map(dato => {
      if (dato.type == 'egreso') {
        return Number(dato.amount.substring(1,dato.amount.lenght))
      } else {
        return 0
      }
    })

    const montoIngreso = datos.map(dato => {
      if (dato.type == 'ingreso') {
        return Number(dato.amount.substring(1,dato.amount.lenght))
      } else {
        return 0
      }
    })

    const totalEgreso = (montoEgreso.reduce((prev, current) => prev + current)).toFixed(2)

    const totalIngreso = (montoIngreso.reduce((prev, current) => prev + current)).toFixed(2)

    const total = Number(totalEgreso) + Number(totalIngreso);

    return (
        <>
          <p>Total ingresos: ${totalIngreso}</p>  
          <p>Total egresos: ${totalEgreso}</p>  
          <p>Total general: ${total}</p>  
        </>
    );
}