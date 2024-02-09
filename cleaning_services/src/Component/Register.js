const { useReducer, useState } = require("react");

export default function  RegiStration(){
    
    const init = {
        name :   {value:"",valid:false , touched:false , error:""},
        address :   {value:"",valid:false , touched:false , error:""},
        email_id :  {value:"",valid:false , touched:false , error:""},
        date_of_birth : {value:"",valid:false , touched:false , error:""},
        gender :    {value:"",valid:false , touched:false , error:""},
        mobile_num: {value:"",valid:false , touched:false , error:""},
        role:       {value:"",valid:false , touched:false , error:""},
        password:   {value:"",valid:false , touched:false , error:""}
    }

    const reducer = (state,action) => {
        switch(action.type)
        {
            case 'update':
               
                const {key,value,touched,valid,error,formValid} = action.data;
                return {...state,[key]:{value,touched,valid,error},formValid}
            
            case 'reset':
                return init;        
        }
    }

    const[user,dispatch]=useReducer(reducer,init)
    const[msg,setMsg]=useState("")

    const validateData = (key,val) => {
        let valid = true;
        let error = ""
        switch(key)
        {
            case 'name':
                var pattern = /^[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}$/ 
                if(!pattern.test(val))
                {
                    valid = false;
                    error = "First Letter of Name and Surname Should be Capital "
                }
                break;
            
            case 'password':
                var pattern = /^[\w]{8,15}$/ 
                if(!pattern.test(val))
                {
                    valid = false;
                    error = "Password Size 8-15"
                }
                break;

            case 'email_id':
                var pattern = /^[\w.#-]{4,20}@[\w-]{5,15}\.[a-z]{2,3}$/ 
                if(!pattern.test(val))
                {
                    valid = false;
                    error = "Please Enter valid Email"
                }
                break;

        }
        return { valid: valid, error: error}
    }


    const handleChange = (key,value) => {
       
        const {valid, error} = validateData(key,value);

       
        let formValid = true;
        for(let k in user)
        {
           
            if(user[k].valid === false)
            {
                formValid = false;
                break;
            }
        }
        
        console.log(formValid);
        console.log("------");

       
        dispatch({type: "update",data:{key,value,touched:true,valid,error,formValid}})
    }

    const submitData = (e) =>{
        e.preventDefault();
       
    

    
        const reqOption={
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                
                name : user.name.value,
                address : user.address.value,
                email_id : user.email_id.value,
                date_of_birth : user.date_of_birth.value,
                gender : user.gender.value,
                mobile_num : user.mobile_num.value,
                role : user.role.value,
                password : user.password.value
            })
        };
    
        fetch("http://localhost:9000/reg",reqOption)
        .then(resp => resp.text())
        .then(str => setMsg(str))
        

    }
    

    return(
        <div>
            <form>
                Name : 
                <input type="text" name="name" value={user.name.value}
                onChange={(e)=>{handleChange("name",e.target.value)}}  />
                
                <div style={{ display: (!user.name.valid)  ?"block":"none"}}>
                    {user.name.error}
                </div>
                <br/>
            

                Address : 
                <input type="text" name="address" value={user.address.value}
                onChange={(e)=>{handleChange("address",e.target.value)}}  /><br/>
                <br/>


                Email Adress : <input type="email_id" name="email_id" value={user.email_id.value}
                onChange={(e)=>{handleChange("email_id",e.target.value)}}  />
                <div style={{ display: (!user.email_id.valid)  ?"block":"none"}}>
                    {user.email_id.error}
                </div><br/>
                
                
                Date of Birth: 
                <input type="date" name="date_of_birth" value={user.date_of_birth.value}
                onChange={(e)=>{handleChange("date_of_birth",e.target.value)}}  /><br/><br/>

                
                Gender:Male
                <input type="radio" name="gender" value="M"
                onChange={(e)=>{handleChange("gender",e.target.value)}}  />
                Female
                <input type="radio" name="gender" value="F"
                onChange={(e)=>{handleChange("gender",e.target.value)}}  /><br/><br/>


                Mobile num:
                <input type="number" name="mobile_num" value={user.mobile_num.value}
                onChange={(e)=>{handleChange("mobile_num",e.target.value)}}  /><br/><br/>


                Role:
                <input type="text" name="role" value={user.role.value}
                onChange={(e)=>{handleChange("role",e.target.value)}}  /><br/><br/>


                Password : 
                <input type="password" name="password" value={user.password.value}
                onChange={(e)=>{handleChange("password",e.target.value)}}  />
                <div style={{ display: (!user.password.valid)  ?"block":"none"}}>
                    {user.password.error}
                </div>
                <br/>

                
            </form>
            
            <input type="submit" value="Insert"
                disabled={!user.formValid} 
                onClick={(e)=>{submitData(e)}} />
            {/* <div>{msg}</div> */}
        </div>
    )

} 