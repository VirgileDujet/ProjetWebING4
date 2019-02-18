import React, { Component } from 'react';
import Widget from './components/Widget';
import PieWidget from './components/PieWidget';
import ListWidget from './components/ListWidget';
import './style/Widget.css';
import './App.css'
import {Container,Row,Col,Button} from 'reactstrap';

class App extends Component {
    render() {

      const data =[{"name":"test1"},{"name":"test2"}];
        return (
    <div className="App">
      <Container>
          <Row>
          <Col sm='4'>
            <ListWidget titre="Fond pour le théatre" data="5">
            </ListWidget>
            <br/>
            <Widget titre="Places restantes" contenu="5">
            </Widget >
          </Col>


            <Col sm='4'>
              <Widget titre="Places restantes" contenu="5">
              </Widget >
                <br/>
              <Widget titre="Places restantes" contenu="5">
              </Widget >
            </Col>

            <Col sm='4'>
              <PieWidget titre="Types de places vendues" contenu="5">
              </PieWidget>
                <br/>
                <ListWidget titre="Fond pour le théatre" data="5">
                </ListWidget>
            </Col>
          </Row>
        </Container>
      </div>

        );
    }
}





export default App;
