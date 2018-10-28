import React from 'react';

class Vegetables extends React.Component {
    
    
    getVegetables(){
    }
        
    render(){
        return(
            <div className="produceTable">
            <h3>Current Vegetable Prices</h3>
        
            <table border= "1">
                <tbody> 
                    <tr>
                        <td><b>Vegetable</b></td>
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

export default Vegetables;