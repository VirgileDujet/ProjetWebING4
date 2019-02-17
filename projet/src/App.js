import React, { Component } from 'react';
import Widget from './components/Widget';
import './style/Widget.css';
import {Container,Row,Col,Button} from 'reactstrap';



class App extends Component {
    render() {
        return (
      <Container>
          <Row>
            <Col sm='2'>
              <Widget />

            </Col>
            <Col sm='10'>
              <Widget />
            </Col>
          </Row>
        </Container>

        );
    }
}

export default App;
