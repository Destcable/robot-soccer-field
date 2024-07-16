import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const SoccerContructorListCardWrapper = ({ icon, name }) => (
    <Card style={{ display: "flex", justifyContent: "space-between", marginBottom: '25px' }}>
        <CardContent style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
                <img src={icon} loading="lazy" />
            </Box>
            <Typography component="div" ml={3}>
                {name}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">ПЕРЕЙТИ</Button>
        </CardActions>
    </Card>
);

export default SoccerContructorListCardWrapper;