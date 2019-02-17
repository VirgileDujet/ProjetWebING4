import React, { Component } from 'react';
import Widget from './components/Widget';
import PieWidget from './components/PieWidget';
import './style/Widget.css';
import './App.css'
import {Container,Row,Col,Button} from 'reactstrap';

class App extends Component {
    render() {
        return (
    <div className="App">
      <Container>
          <Row>
            <Col sm='4'>
              <Widget titre="Places restantes" contenu="5">
              </Widget >

            </Col>
            <Col sm='2'>
            <PieWidget titre="Places restantes" contenu="5">
            </PieWidget>

            </Col>
          </Row>
        </Container>
      </div>

        );
    }
}





export default App;
