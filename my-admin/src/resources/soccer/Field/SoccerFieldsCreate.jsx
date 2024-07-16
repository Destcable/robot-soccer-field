import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

const SoccerFieldsCreate = () => { 
    return( 
        <Create> 
            <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="length"/>
            <NumberInput source="width"/>
            <TextInput source="unit"/>
            </SimpleForm>
        </Create>
    )
};

export default SoccerFieldsCreate;