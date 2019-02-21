import React, { Component } from 'react';
import Widget from './components/Widget';
import PieWidget from './components/PieWidget';
import ProgressWidget from './components/ProgressWidget';
import ImageWidget from './components/ImageWidget'
import './style/Widget.css';
import './App.css'
import {Container,Row,Col,Button} from 'reactstrap';
const val = (77);
class App extends Component {
  test(val){
    const ok = val+1;
    return ok.toString();
  }
    render() {

      const data =[{"name":"test1"},{"name":"test2"}];
        return (
    <div className="App">
      <Container>
          <Row>
          <Col sm='4'>
            <ProgressWidget titre="Fond pour le théatre" data="5">
            </ProgressWidget>
            <br/>
            <Widget titre="Places restantes G" contenu="5">
            </Widget >
            <br/>
            <ImageWidget>
            </ImageWidget>
          </Col>


            <Col sm='4'>
              <Widget titre="Places restantes " contenu="5">
              </Widget >
                <br/>
              <Widget titre="Places restantes" contenu="5">
              </Widget >
            </Col>

            <Col sm='4'>
              <PieWidget titre="Types de places vendues" contenu="5">
              </PieWidget>
                <br/>
                <ProgressWidget titre="Fond pour le théatre" titre2="Preparation de la piece" titre3="Echauffement des acteurs"data={this.test(val)} data={this.test(val)} data={this.test(val)}>
                </ProgressWidget>
              }
            </Col>
          </Row>
        </Container>
      </div>

        );
    }
}





export default App;
