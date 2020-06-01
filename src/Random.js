import React from 'react';

class Random extends React.Component{
  
  // how_many_number : how many numbers you want to generate. For example it is 5.
  // min(inclusive) : minimum/low value of a range. it must be any positive integer but less than max. i.e 4
  // max(inclusive) : maximun value of a range. it must be any positive integer. i.e 50
  
  state = {
    how_many_number:5,
    min : 1,
    max : 1000
  };

  // return type: array
  genRandomNumber =()=>{

    let random_number = [];

      for (let i = 0; i < this.state.how_many_number; i++) {

        let gen_num = parseInt((Math.random() * (this.state.max-this.state.min+1)) + this.state.min);
          do {
              var is_exist = random_number.indexOf(gen_num);
                if (is_exist >= 0) {
                    gen_num = parseInt((Math.random() * (this.state.max-this.state.min+1)) + this.state.min);
                  }
                else {
                    random_number.push(gen_num);
                    is_exist = -2;
                  }
            }while (is_exist > -1);
      }

      return random_number;
  }

  render(){

    const gen_random_nos = this.genRandomNumber();

    return (
      <div className="App">
        {gen_random_nos.map(gen_random_no => <li> {gen_random_no} </li>)}            
      </div>
    );
  }
}

export default Random;
