import Reacy from 'react';

//function component
function Customer(){
    return(   
        
        <div className='Customer'>
         <form id="form" action="/">
            <h1>Sign Up</h1>
            <div class="input-control">
                <label for="fname">First Name</label>
                <input id="fname" name="fname" type="text"/>
                <div class="error"></div>
           </div>
            <div class="input-control">
                <label for="lname">Last Name</label>
                <input id="lname" name="lname" type="text"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="orderid">OrderID</label>
                <input id="orderid"name="orderid" type="text"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="phone">Phone Number</label>
                <input id="phone"name="phone" type="number"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="email">Email</label>
                <input id="email"name="email" type="text"/>
                <div class="error"></div>
            </div>
            

            <button type="submit">Submit</button>
        </form>
    
    

        </div>    

          

          
            
       
    );
    
}
export default Customer;