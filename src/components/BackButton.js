import useAuth from "../hooks/useAuth";
import globalContext from "../context/globalContext";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";

export default function BackButton({ history, otraRuta }) {

  const volver = () => {
    history.goBack();
  };

  const user = useAuth(history);

  return (
    <Button className="bg-botoncito" onClick={volver}>
      ← Volver
    </Button>
  );
}
