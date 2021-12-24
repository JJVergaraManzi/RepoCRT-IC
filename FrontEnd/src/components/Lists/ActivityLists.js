import axios from "axios";
import React, { Component } from 'react';
import Activity from './links/Activity';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#FE2E2E',
    borderColor: '#FE2E2E',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

export default class ActivityList extends Component{
    
    state={
        activities: []
    }

    async componentDidMount(){
        console.log("Log de prueba",this.props.lista)
        /*const res = await axios.get('http://localhost:1337/api/activities-forms')
        //console.log("primer log: ", res.data.data[0].attributes)
        this.setState({
            activities : res.data.data
        });
        console.log("segundo log",this.state.activities)*/
    }

    deleteActivity = async (ActivityId) =>{
        await axios.delete('http://localhost:1337/api/activities-forms/'+ ActivityId);
        this.getActivities();
    }

    render(){
        return(
                
                    this.props.lista.map(activity =>(
                        <div>
                            <div>
                            <div className="card-header d-flex justify-content-between">
                                <Stack direction="row" spacing={4} justifyContent="space-around">
                                    <Link to={"/editActivities/" +activity.id} className="btn btn-secondary">
                                        <Button variant="outlined" startIcon={<ClearIcon />}>Editar</Button>
                                    </Link>
                                    
                                </Stack>
                            </div>
                            <Activity key={activity.id} activity={activity}/>
                            </div>
                            <div className="card-footer">
                            <BootstrapButton variant="contained" disableRipple startIcon={<ClearIcon />} onClick={() => this.deleteActivity(activity.id)}>
                                Borrar
                            </BootstrapButton>
                            </div>
                        </div>
                    ))
                
        )
    }
}