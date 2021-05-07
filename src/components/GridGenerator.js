import React from "react";
import {chunk} from 'lodash'
import {Col, Row } from "react-bootstrap";

const GridPropiedadesGenerator = ({ cols, children }) => {
  const colWidth = 12 / cols;
  const rows = chunk(React.Children.toArray(children), cols);
  return (
    <>
      {rows.map((cols) => (
        <Row className="p-3 justify-content-md-around">
          {cols.map((col) => (
            <Col md={6} lg={4} xs={12} className="d-flex justify-content-center">
                {col}
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
};

export default GridPropiedadesGenerator;
