import React from 'react'
import { BookProps } from './book'
import { List, ListItem, ListItemText, Typography } from '@mui/material'

export interface BookInfoProps extends BookProps{
    condition: string,
}

const BookInfo: React.FC<BookInfoProps> = ({ title, author, edition,exchange, condition,  url}) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom style={{margin:'20px 0'}}>
        {exchange? 'The Book You Want' :'Book Information '}
      </Typography>
      <div>
        <img src={url} alt={title} style={{backgroundPosition:'center',backgroundSize:'center', height:'450px'}}/>
      </div>
      <List>
        <ListItem>
          <ListItemText primary={`Name: ${title}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Author: ${author}`}/>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Edition: ${edition}`}/>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Condition: ${condition}`} />
        </ListItem>
      </List>
    </div>
  )
}

export default BookInfo