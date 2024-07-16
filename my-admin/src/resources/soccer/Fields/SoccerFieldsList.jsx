import { Datagrid, List, TextField } from "react-admin";

const SoccerFieldsList = () => { 
    return( 
        <List>
            <Datagrid>
                <TextField source="name" />
            </Datagrid>
        </List>
    )
};

export default SoccerFieldsList;