
import React from 'react';
import st from './style.module.css';
import PockemonCard from '../../components/PockemonCard';
import { cards } from '../../cards/index';
import Layout from '../../components/Layout';

const  GamePage =  ({children})=> { 
    const [newCards,setCards] = React.useState([...cards])
    function addActiveTocard(id){
        
        return setCards(prev=>([...prev.filter(el=>{
            if(el.id === id){
                 el['isActive'] = el.hasOwnProperty("isActive")   ? !el['isActive'] : true;
              }
              return true;
            }
          )]));
    }
return (
    <>
        <Layout 
            title = "Game Place" >
            <div className = {st.flex}>
              {
                newCards.map((item)=>< PockemonCard 
                  onClick = {()=>console.log("avoooeeee")}
                  key = {item.id} 
                  name = {item.name} 
                  img = {item.img} 
                  id = {item.id} 
                  type = {item.type} 
                  values =  {item.values}
                  addActiveTocard = { addActiveTocard }
                  isActive = {!!item.isActive === true ? item.isActive : ''} />)
              }
            </div>
          </Layout>
</>
    )
 }

export default GamePage;


/*   Можете ли вы проверить код middleware моего проекта   на nodejs,
      чтобы получить отфильтрованные данные и из postgresql,
       по умолчанию без фильтра по url получает null значения параметров
      это приемлемый подход? к сожалению, я не знаю других способов.
      спасибо заранее.
    nodejs,material ui, react hooks spa
*/

/*
const express =  require('express');

function parseUrl(req,res,next){
    const {damageId,deviceProblems,startDate,endDate,problemReasons,serviceTeams,createdUsers,createdRoles,limit,offset } = req.query;
    console.log(damageId,deviceProblems,startDate,endDate,problemReasons,serviceTeams,createdUsers,createdRoles,limit,offset, " IN middleware from req query")
    let obj = {
        damageId,
        deviceProblems,
        startDate,
        endDate,
        problemReasons,
        serviceTeams,
        createdUsers,
        createdRoles,
        limit,
        offset
    }
    let values = {
        damageId:'',
        deviceProblems:'',
        startDate:'',
        endDate:'',
        problemReasons:'',
        serviceTeams:'',
        createdUsers:'',
        createdRoles:'',
        limit: null,
        offset:null
    }
    
    function damageIdFn(a){
        if(a == 'null'){
          return;
        };
         return   values = {
                ...values,
                damageId: `AND current_damages.damage_id IN (${a.split(";").map(el=>{
                    return parseInt(el,10)
           })})`
        }
        
    };
    function deviceProblemsFn(a){
        if(a == 'null'){
          return ;
        };
         return   values = {
                ...values,
                deviceProblems: `AND  current_damages.device_problem ILIKE '%${a}%'`
        }
    //  return;   
    }
    function startDateFn (a){
        if (a == 'null'){
            return;
        };
    
    let from = `'${a.split(";")[0]}'`;
    let to = `'${a.split(";")[1]}'`;
         return  values  = {
                ...values,
                startDate: `AND ( current_damages.start_date BETWEEN ${from} AND ${to})`
            }
        
    };
    function endDateFn (a){
        if (a == 'null'){
            return;
        };
        let from = `'${a.split(";")[0]}'`;
        let to = `'${a.split(";")[1]}'`;
         return  values  = {
                ...values,
                endDate: `AND ( current_damages.end_date BETWEEN ${from}  AND ${to})`
            }
    };

    function problemReasonsFn(a){
        if(a == 'null'){
            return;
        };
        return values = {
                ...values,
                problemReasons: ` AND current_damages.problem_reason_id IN (${a.split(";").map(el=>{
                    return el;
                })}) `
            }
        
    };
    function serviceTeamsFn(a){
        if(a =='null'){
            return;
        };
        return values = {
                ...values,
                serviceTeams: ` AND current_damages.service_team_id IN (${a.split(";").map(el=>{
                    return el;
                })}) `
            }
    };
    function createdRolesFn(a){
        if(a == 'null'){
            return;
        };
         return values = {
                ...values,
                createdRoles: ` AND  t4.id IN (${a.split(";").map(el=>{
                    return el;
                })}) `
            }
        
    };
    function createdUsersFn(a){
        if(a == 'null'){
            return;
        };
         return values = {
                ...values,
                createdUsers: ` AND t3.id IN (${a.split(";").map(el=>{
                    return el;
                })}) `
            }
        
    };
    
            

    Object.keys(obj).map(el=>{
        
        switch(el){
            case "damageId":
                return damageIdFn(obj[el]);
            case "deviceProblems":
                return deviceProblemsFn(obj[el]);
            case "startDate":
                return startDateFn(obj[el]);
            case "endDate":
                return endDateFn(obj[el]);
            case "problemReasons":
                return problemReasonsFn(obj[el]);
            case "serviceTeams":
                return serviceTeamsFn(obj[el]);
            case "createdUsers":
                return createdUsersFn(obj[el]);
            case "createdRoles":
                return createdRolesFn(obj[el]);
            default:
                break;
        };
        console.log(obj[el])
    });
    values = {
        ...values,
        limit:obj.limit,
        offset:obj.offset
    };
    console.log(values,obj, "in Middleware NEW OBJECT")
    req.query = values;
    next();
    return;
};
module.exports = parseUrl;

*/