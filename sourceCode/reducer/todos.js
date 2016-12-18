import { USER_ADD , USER_DEL , USER_INFO , USER_EDIT_SUB , USER_EDIT} from '../actions/actions'

let count = 0;
const todo = (state , action)=>{
	switch(action.type){
		case USER_ADD:
			return {
				name:action.obj.name,
				age:action.obj.age,
				weight:action.obj.weight,
				gender:action.obj.gender,
				key:count++,
				agreement:action.obj.remember 
			}
		default :
			return state
	}
}

const todos = (state = [] ,action)=>{
	switch(action.type){
		case USER_ADD :

			return [
				...state,
				todo(undefined,action)
			]
		case USER_DEL: 
			 return state.filter(todo =>
			 		todo.key !== action.id
			 )
		case USER_EDIT_SUB:
			state=  state.map((todo)=>{
				if(todo.key === action.obj.key){
					 return Object.assign({},todo,action.obj)
				}
				return Object.assign({},todo)
			});
			// let abbc= [];
		 //    state.forEach(function(i){
   //              abbc.push(i.name)
		 //    });
		 //    abbc=abbc.map((x,i)=>{ return({name:x,key:i}) });
		 //    state.statics=abbc;
		 //    return state
		 	


		case USER_EDIT:
		    let objs = {dataForm:action.obj};
		    return Object.assign (state,objs)
		case 'statics':


		    let a= [];
		    let fstate=state.filter((x)=>{return (x.weight<=112)})
		    fstate.forEach(function(i){
                a.push(i.name)
		    });
		    state.statics1=a.map((x,i)=>{ return({name:x,key:i}) });



		     let b= [];
		    let fstate2=state.filter((x)=>{return (x.weight<=126 && x.weight>112)})
		    fstate2.forEach(function(i){
                b.push(i.name)
		    });
		    state.statics2=b.map((x,i)=>{ return({name:x,key:i}) });


		      let c= [];
		    let fstate3=state.filter((x)=>{return (x.weight>126 &&  x.weight<=135 )})
		    fstate3.forEach(function(i){
                c.push(i.name)
		    });
		    state.statics3=c.map((x,i)=>{ return({name:x,key:i}) });

		       let d= [];
		    let fstate4=state.filter((x)=>{return (x.weight>135 &&  x.weight<=160 )})
		    fstate4.forEach(function(i){
                d.push(i.name)
		    });
		    state.statics4=d.map((x,i)=>{ return({name:x,key:i}) });


		     let e= [];
		    let fstate5=state.filter((x)=>{return (x.weight>160)})
		    fstate5.forEach(function(i){
                e.push(i.name)
		    });
		    state.statics5=e.map((x,i)=>{ return({name:x,key:i}) });





		    
		    return state
		default :
			return state
	}
}
export default todos