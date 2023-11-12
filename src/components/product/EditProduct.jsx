import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useParams } from 'react-router-dom';
import CategorySelect from './CategorySelect';

const EditProduct = () => {
    const {saveChanges, getOneProduct, oneProduct, getCategories, categories} = useProducts()
    const [product, setProduct] = useState({
        title: '',
        category:'',
        description: '',
        price: '',
        image:''
    })
    const {id} = useParams()
    useEffect(() => {
        getOneProduct(id)
        getCategories()
    }, [])
    useEffect(()=>{
        if(oneProduct){
            setProduct(oneProduct)
        }
    },[oneProduct])
    const handleInput = (e) =>{
        if(e.target.name === 'price'){
            const obj = {...product, [e.target.name] : Number(e.target.value)}
            setProduct(obj) 
        }
        else{
            const obj = {...product, [e.target.name] : e.target.value}
            setProduct(obj) 
        }
    }
    return (
        <div>
            <Box sx={{ width: '50vw', height: 500, margin: '20px auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography variant='h4' align='center'>EDIT PRODUCT</Typography>
                <TextField value={product.title} onChange={handleInput} fullWidth name='title' label="Title" variant="outlined" />
                {/* <TextField value={product.category} onChange={handleInput} fullWidth name='category' label="Category" variant="outlined" /> */}
                <CategorySelect product={product} handleInput={handleInput} categories={categories}/>
                <TextField value={product.description} onChange={handleInput} fullWidth name='description' label="Description" variant="outlined" />
                <TextField value={product.price} onChange={handleInput} type='number' fullWidth name='price' label="Price" variant="outlined" />
                <TextField value={product.image} onChange={handleInput} fullWidth name='image' label="Image URL" variant="outlined" />
                <Button onClick={()=>saveChanges(id, product)} fullWidth variant='outlined'>SAVE CHANGES</Button>
            </Box>
        </div>
    );
};

export default EditProduct;