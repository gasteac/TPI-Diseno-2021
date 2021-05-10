import React from "react";
import Notificacion from "./Notificacion";


const Notificaciones = ({nombreDeUsuario}) => {
  return (
    <div className="card ml-3" style={{backgroundColor: "#B3BCE8", border:'none', borderRadius:'9px'}}>
    <div className="card-header"  style={{backgroundColor: "#50628C", color:"#FAFAFA", borderTopRightRadius:'9px', borderTopLeftRadius:'9px'}}>
       <h1>Bienvenido/a, {nombreDeUsuario}.</h1> 
       <h6>Estas son tus notificaciones:</h6>
    </div>
    <div className="card-body" style={{borderTopRightRadius:'9px', borderTopLeftRadius:'9px', border:'9px'}}>
        <div className="card mb-2" style={{ borderRadius:'9px', borderTopLeftRadius:'9px', border:'9px'}}><Notificacion/></div>
        <div className="card mb-2" style={{borderRadius:'9px', borderTopLeftRadius:'9px', border:'9px'}}><Notificacion/></div>
        <div className="card mt-2" style={{borderRadius:'9px', borderTopLeftRadius:'9px', border:'9px'}}><Notificacion/></div>
    </div>
  </div>
    // <div className="siimple-card radius-16">
    //   <div className="siimple-card-header bg-violetaOscuro-2 text-white">
    //       <h1>
    //           Bienvenido Gastón
    //       </h1>
    //       <h3>Estos son tu eventos de hoy.</h3>
    //   </div>
    //   <div id="border-cero" className="siimple-card-body bg-rosa1">
    //       <div className="siimple-card bg-rosa2">
    //           <Notificacion />
    //       </div>
    //   </div>
    //   <div id="border-cero" className="siimple-card-body bg-rosa1">
    //       <div className="siimple-card bg-rosa2">
    //           <Notificacion />
    //       </div>
    //   </div>
    //   <div id="border-cero" className="siimple-card-body bg-rosa1">
    //       <div className="siimple-card bg-rosa2">
    //           <Notificacion />
    //       </div>
    //   </div>
    // </div>
  );
};

export default Notificaciones;
