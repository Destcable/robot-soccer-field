import { Datagrid, List, NumberField, TextField } from "react-admin";

const SoccerFieldsList = () => { 
    return( 
        <List>
            <Datagrid>
                <TextField source="name" />
                <TextField source="description" />
                <NumberField source="length" />
                <NumberField source="width" />
                <TextField source="unit" />
            </Datagrid>
        </List>
    )
};

export default SoccerFieldsList;