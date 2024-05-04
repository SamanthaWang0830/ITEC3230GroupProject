import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface BookProps{
    title: string,
    author: string,
    edition: string,
    buy: boolean,
    exchange:boolean,
    url:string,
    price?: string,
    id:number,
}

const book: React.FC<BookProps>= ({title, author, id, buy, exchange, url, price}) => {
  return (
    <Card style={{ height: '100%' }}>
      <CardMedia
        sx={{ height: 300,backgroundSize: 'contain', backgroundPosition: 'center',}}
        image={url}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Author: {author}
        </Typography>
        {price && <Typography variant="subtitle1" color="secondary" style={{fontFamily:'monospace'}}>
         Price: ${price} 
        </Typography>}
      </CardContent>
      <CardActions>
        {buy && <Button size="small" href={`/buy/${id}`}>Buy</Button>}
        {exchange && <Button size="small" href={`/exchange/${id}`}>Exchange</Button>}
      </CardActions>
    </Card>
  )
}

export default book