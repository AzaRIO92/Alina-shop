import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { WidthFull } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function NewArrivals() {
  return (
    <div style={{width: '90%', margin: '5% auto', }}>
    <Typography variant="h4" align="center" fontSize='48px' fontWeight='700' margin='5% auto'>
    NEW ARRIVALS
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4.3%'}}>
    <Card sx={{ width: 296, height: 450, boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, flexWrap: 'wrap', gap: '12px'}}>
      <CardMedia
        sx={{ height: 320, background: ' lightgray 50% / cover no-repeat', borderRadius: 4, }}
        image='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg'
        title="green iguana"
      />
      <CardContent sx={{padding: '20px 5px'}}>
        <Typography gutterBottom variant="h5" component="div" fontSize='20' fontWeight={700}>
          Crockodile
        </Typography>
        <Stack spacing={1} margin='8px 0'>
        <Rating name="half-rating" defaultValue={0} precision={1} />
        </Stack>
        <Typography variant="body2" color="black" fontSize='24px' fontWeight="700">
            120KGS
        </Typography>
      </CardContent>
      </Card>
      </div>
      <Button variant="outlined" sx={{color: 'black', border: '1px solid black', marginLeft: '46%', marginTop:'4%'}}>View All</Button>
    </div>
  );
}