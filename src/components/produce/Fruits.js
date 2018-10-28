import React from 'react';

class Fruits extends React.Component {    
    getFruits = () => {
    }
    render(){
        return(
        <div className="produceTable">
            <h3>Current Fruit Prices</h3>
        
            <table border= "1">
                <tbody> 
                    <tr>
                        <td><b>Fruit</b></td>
                        <td><b>Current Price</b></td>
                    </tr>
                    <tr>
                        <td>Column1</td>
                        <td>Column2</td>
                    </tr>
                </tbody>
            </table>
            <a href="../Produce" className='backButton'>Return</a>
        </div>

        );
    }
}

export default Fruits;