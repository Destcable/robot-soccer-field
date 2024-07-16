import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

const SoccerConstructorCreate = () => { 
    return( 
        <Create> 
            <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="length"/>
            <NumberInput source="width"/>
            <TextInput source="unit"/>
            </SimpleForm>
        </Create>
    )
};

export default SoccerConstructorCreate;