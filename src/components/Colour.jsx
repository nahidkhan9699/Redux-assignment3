import { Button, Grid,Card,CardContent } from '@mui/material';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
const Colour = () => {
    const dispatch=useDispatch();
    const selectcolor=useSelector((state)=>state.colourReducer.color);
    const clr=["red","pink","yellow","green","blue","cadetblue"];
    const handleclr=(str)=>{
        const type="COLORS";
        const payload=str;
        const action={type,payload}
        dispatch(action)
    }
    return (
        <Grid container spacing={2} sx={{marginTop:2,bgcolor:"rgb(204, 153, 255)",height:"100vh"}}>
            {
                clr.map((item)=>
                <Grid item xs={2}>
                    <Button sx={{bgcolor:item}} onClick={()=>handleclr(item)} variant='contained' fullWidth color='inherit' >
                    {item}
                    </Button>
                </Grid>
                )
            }
            <Grid item xs={4}> </Grid>
            <Grid item xs={4} sx={{marginTop:2}}>
            <Card sx={{bgcolor:selectcolor,height:350,width:400,borderRadius:10}}>
                <CardContent>

                </CardContent>
            </Card>
            </Grid>
        </Grid>
    );
};

export default Colour;