import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { TurnedInNot } from '@mui/icons-material'

export const SideBarItem = ({ note }) => {
  return (
    <ListItem key={ note.id } disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={note.title} />
                <ListItemText secondary={'In ex ex velit excepteur amet.'} />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
