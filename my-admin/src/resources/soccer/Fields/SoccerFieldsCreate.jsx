import { Create, SimpleForm, TextInput } from "react-admin";

const SoccerFieldsCreate = () => { 
    return( 
        <Create> 
            <SimpleForm>
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    )
};

export default SoccerFieldsCreate;