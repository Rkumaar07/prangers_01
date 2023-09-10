import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>"May the power protect you!"</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='“Wake up to reality! Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in'
              label='Mighty Morphin'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='this reality are merely pain. suffering and futility. Listen, everywhere you look in this world, wherever there is light, there will always be shadows to be'
              label='S.P.D'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='found as well. As long as there is a concept of victors, the vanquished will also exist. The selfish intent of wanting to preserve peace initiates war. and'
              label='Jungle Furry'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience hatred is born in order to protect love. There are nexuses causal relationships that cannot be separated - Madara Uchiha.”'
              label='Dino Thunder'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='People cannot show each other their true feelings fear suspicion and resentment never subside'
              label='Mystic Force'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;