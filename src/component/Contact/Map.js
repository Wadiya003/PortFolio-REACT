import React from 'react';
import styled from 'styled-components';
import MapImg from './pics/map.png';
// import PText from '../PText';

const MapStyles = styled.div`
  background-position: center;
  background-size: cover;
  min-height: 300px;
  .container {
    position: relative;
    min-height: 300px;
    
  }
  .map__card {
    position: absolute;
    padding-top: 2rem;
    padding-left:0;
    padding-bottom:0;
    width: 100%;
    border-radius: 12px;
    background:black;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    ${'' /* background-position: 80% center; */}
    .map{
      width:768px;
      height:200px;

    }
  }
  @media only screen and (max-width: 400px) {
    ${'' /* .map__card {
      max-width: none;
      right: auto;
    } */}
    .map{
      width:400px;
      height:200px;

    }
  }
`;


export default function Map() {
  return (
    <MapStyles>
      <div className="container">
      <div className='map__card'>
      <iframe className='map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7008.050535694047!2d77.28908200000001!3d28.56900395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4767689a381%3A0x83aeae3e998c214d!2sBatla%20House%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1653816105434!5m2!1sen!2sin"
              width="1350"
              height="300"
              frameBorder="0"
              style={{ border: 0 , opacity:0.3}}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
      </div>
      </div>
    </MapStyles>
  );
}