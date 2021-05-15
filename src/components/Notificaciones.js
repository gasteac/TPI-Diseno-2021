import React from "react";
import Notificacion from "./Notificacion";


const Notificaciones = ({nombreDeUsuario}) => {
  return (
    <div className="card ml-3 " style={{backgroundColor: "#a79ba790", border:'none', borderRadius:'9px'}}>
    <div className="card-header "  style={{backgroundColor: "#a79ba790", color:"#FAFAFA", borderTopRightRadius:'9px', borderTopLeftRadius:'9px'}}>
       <h1 style={{textShadow:'2px 2px 5px black'}}>Bienvenido/a, {nombreDeUsuario}.</h1> 
       <h6 style={{textShadow:'2px 2px 5px black'}}>Estas son tus notificaciones:</h6>
    </div>
    <div className="card-body bordermax">
        <div className="card mb-2" style={{background:'#44394260',borderRadius:'9px', borderTopLeftRadius:'9px', border:'9px'}}><Notificacion/></div>
        <div className="card mb-2" style={{background:'#44394260',borderRadius:'9px', borderTopLeftRadius:'9px', border:'9px'}}><Notificacion/></div>
        <div className="card mt-2" style={{background:'#44394260',borderRadius:'9px', borderTopLeftRadius:'9px', border:'9px'}}><Notificacion/></div>
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
