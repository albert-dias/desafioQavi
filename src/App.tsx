import React, {useCallback, useEffect, useState} from 'react';
// import './styles/styles.scss'
import { useLongPress } from "react-use";

import {
  Container,
  Content,
  Column,
  Button,
  Row,
  Divisor,
} from './styles/styles';

function App() {
  const alfa = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z'];
  const un =  ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
  const dezen = ["zero","dez", "vinte", "trinta", "quarenta", "cinqüenta"];
  const unF =  ["doze", "uma", "duas"];

  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0)
  const [phrase, setPhrase] = useState('');
  const [pangram, setPangram] = useState('');
  const [extTime, setExtTime] = useState('');
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(5*60);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const handlePangramVerify = useCallback(() => {
    const result = alfa.filter((char) => {return phrase.toLowerCase().indexOf(char) ===-1 });
    setPangram(result.length > 0 ? "not pangram" : "pangram")
  },[phrase]);

  const handleExtensiveTime = useCallback(() => {
    setExtTime(extensiveTime)
  }, [hour, min])

  const extensiveTime = useCallback(() => {
    console.log(hour, min)
    if(min < 20) {
      return `${hour < 3 ? unF[hour] : un[hour]} ${min !== 0 ? "e "+un[min] : 'em ponto' }`;
    }else{
      switch(min) {
        case 30:
          return `${hour < 3 ? unF[hour] : un[hour]} e meia`;
        case 40:
          return `${dezen[0]} para as ${un[hour+1]}`;
        case 45:
          return `${un[15]} para as ${un[hour+1]}`;
        case 50:
          return `${un[10]} para as ${un[hour+1]}`;
        case 55:
          return `${un[5]} para as ${un[hour+1]}`;
        default:
          return `${hour < 3 ? unF[hour] : un[hour]} e ${dezen[(Math.trunc(min/10))]} ${min % 10 !== 0 ? `e ${un[min%10]}` : ''}`;
      }
    }
  }, [hour, min]);

  const onLongPress = () => {
    setStart(false);
    setTime(300)
  };
  const defaultOptions = {
    isPreventDefault: true,
    delay: 2000
  };
  const longPressEvent = useLongPress(onLongPress, defaultOptions);

  useEffect(() => {
    if (start && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)}
  }, [time, start])

  return (
    <Container>
      <Content>
        <Column>
          <h1>Cronomêtro</h1>
          <Button 
            {...longPressEvent}
            onClick={() => setStart(!start)} 
          >
            <strong>{minuteRight}:{secondLeft}{secondRight}</strong>
            <p>{start ? "Stop" : `Start`}</p>
          </Button>
          {/* <div className="set-size charts-container">
            <div className="pie-wrapper progress-30">
              <span className="label">30<span className="smaller">%</span></span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
            </div>
          </div> */}
        </Column>
        <Row>
          <Column>
            <Row>
              <label>Horas:</label>
              <input type="number"  onChange={(e) => {setHour(Number(e.target.value))}} value={hour} />
              <label>Minutos:</label>
              <input type="number" onChange={(e) => {setMin(Number(e.target.value))}} value={min} />
            </Row>
            <button onClick={handleExtensiveTime} >Converter</button>
            {extTime !== '' && 
              <h3>{extTime}</h3>
            }
          </Column>
          <Divisor />
          <Column>
            <input onChange={(e) => {setPhrase(e.target.value)}} value={phrase} placeholder="Digite a sentença para verificação"/>
            <button onClick={handlePangramVerify} >Verificar</button>
            {pangram !== '' && 
              <h3>{pangram}</h3>
            }
          </Column>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
