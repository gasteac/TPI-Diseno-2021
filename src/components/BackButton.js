import { Button } from "react-bootstrap";

export default function BackButton({ history, otraRuta }) {

  const volver = () => {
    history.goBack();
  };

  return (
    <Button className="bg-botoncito" onClick={volver}>
      ← Volver
    </Button>
  );
}
